import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["value"]
  static values = {
    duration: { type: Number, default: 1400 },
    once: { type: Boolean, default: true }
  }

  connect() {
    this.played = false
    this.rafs = []

    this.valueTargets.forEach((el) => {
      const { prefix, suffix, end } = this.#parse(el)
      el.dataset.countPrefix = prefix
      el.dataset.countSuffix = suffix
      el.dataset.countEnd = String(end)
      el.textContent = `${prefix}0${suffix}`
    })

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        if (this.onceValue && this.played) return
        this.played = true
        this.#animateAll()
        if (this.onceValue) this.observer.disconnect()
      },
      { threshold: 0.35 }
    )

    this.observer.observe(this.element)
  }

  disconnect() {
    this.observer?.disconnect()
    this.rafs.forEach((id) => cancelAnimationFrame(id))
    this.rafs = []
  }

  #parse(el) {
    const raw = (el.dataset.countTo || el.textContent || "").trim()
    const match = raw.match(/^([^0-9-+]*)([+-]?)(\d+(?:[.,]\d+)?)(.*)$/)
    if (!match) {
      return { prefix: "", suffix: "", end: 0 }
    }

    const [, before, sign, number, after] = match
    const end = Number(`${sign}${number.replace(",", ".")}`) || 0
    return {
      prefix: before + (sign === "+" ? "+" : ""),
      suffix: after,
      end: Math.abs(end)
    }
  }

  #animateAll() {
    this.valueTargets.forEach((el) => this.#animate(el))
  }

  #animate(el) {
    const end = Number(el.dataset.countEnd) || 0
    const prefix = el.dataset.countPrefix || ""
    const suffix = el.dataset.countSuffix || ""
    const duration = this.durationValue
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(end * eased)
      el.textContent = `${prefix}${current}${suffix}`

      if (progress < 1) {
        this.rafs.push(requestAnimationFrame(tick))
      } else {
        el.textContent = `${prefix}${end}${suffix}`
      }
    }

    this.rafs.push(requestAnimationFrame(tick))
  }
}
