import { Controller } from "@hotwired/stimulus"

// Marquee contínuo por pixels. Clona até cobrir 3× a viewport — sem lacuna.
export default class extends Controller {
  static targets = ["track", "content"]
  static values = {
    speed: { type: Number, default: 32 }, // px/s
    reverse: { type: Boolean, default: false }
  }

  connect() {
    this.offset = 0
    this.setWidth = 0
    this.raf = null
    this.lastTime = null
    this.paused = false
    this.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    this.onResize = () => {
      clearTimeout(this.resizeTimer)
      this.resizeTimer = setTimeout(() => this.prepare(), 80)
    }
    this.onEnter = () => { this.paused = true }
    this.onLeave = () => { this.paused = false; this.lastTime = null }
    this.onMotionChange = (event) => {
      this.reducedMotion = event.matches
      if (this.reducedMotion) {
        cancelAnimationFrame(this.raf)
        this.raf = null
        this.offset = 0
        this.#paint()
      } else if (!this.raf) {
        this.lastTime = null
        this.loop = this.loop.bind(this)
        this.raf = requestAnimationFrame(this.loop)
      }
    }

    this.motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    this.motionQuery.addEventListener?.("change", this.onMotionChange)

    // Aguarda layout/fonte antes da 1ª medição
    requestAnimationFrame(() => {
      this.prepare()
      if (!this.reducedMotion) {
        this.loop = this.loop.bind(this)
        this.raf = requestAnimationFrame(this.loop)
      }
    })

    this.resizeObserver = new ResizeObserver(this.onResize)
    this.resizeObserver.observe(this.element)
    window.addEventListener("resize", this.onResize)
    this.element.addEventListener("mouseenter", this.onEnter)
    this.element.addEventListener("mouseleave", this.onLeave)
  }

  disconnect() {
    cancelAnimationFrame(this.raf)
    clearTimeout(this.resizeTimer)
    this.resizeObserver?.disconnect()
    window.removeEventListener("resize", this.onResize)
    this.element.removeEventListener("mouseenter", this.onEnter)
    this.element.removeEventListener("mouseleave", this.onLeave)
    this.motionQuery?.removeEventListener?.("change", this.onMotionChange)
  }

  prepare() {
    if (!this.hasTrackTarget || !this.hasContentTarget) return

    const track = this.trackTarget
    const content = this.contentTarget

    // Remove fallback CSS e clones antigos; mantém só o content original
    Array.from(track.children).forEach((child) => {
      if (child !== content) child.remove()
    })

    track.classList.add("is-ready")
    track.style.animation = "none"

    if (this.reducedMotion) {
      this.offset = 0
      this.#paint()
      return
    }

    void content.offsetWidth

    let unit = content.getBoundingClientRect().width
    if (unit < 1) {
      requestAnimationFrame(() => this.prepare())
      return
    }

    const viewport = Math.max(this.element.clientWidth, document.documentElement.clientWidth, 1)
    const minWidth = viewport * 3
    let total = unit
    let guard = 0

    while (total < minWidth && guard < 40) {
      track.appendChild(this.#clone(content))
      total += unit
      guard += 1
    }

    if (track.children.length < 2) {
      track.appendChild(this.#clone(content))
    }

    // Recalcula após clones (subpixel / fontes)
    this.setWidth = content.getBoundingClientRect().width
    if (this.setWidth < 1) this.setWidth = unit

    this.offset = this.setWidth > 0 ? this.offset % this.setWidth : 0
    this.#paint()
  }

  #clone(content) {
    const clone = content.cloneNode(true)
    clone.setAttribute("data-marquee-clone", "")
    clone.setAttribute("aria-hidden", "true")
    return clone
  }

  #paint() {
    this.trackTarget.style.transform = `translate3d(${-this.offset}px, 0, 0)`
  }

  loop(time) {
    if (this.reducedMotion) {
      this.raf = null
      return
    }

    if (this.lastTime == null) this.lastTime = time
    const delta = Math.min((time - this.lastTime) / 1000, 0.05)
    this.lastTime = time

    if (!this.paused && this.setWidth > 0) {
      const dir = this.reverseValue ? -1 : 1
      this.offset += this.speedValue * delta * dir

      if (this.offset >= this.setWidth) this.offset -= this.setWidth
      if (this.offset < 0) this.offset += this.setWidth

      this.#paint()
    }

    this.raf = requestAnimationFrame(this.loop)
  }
}
