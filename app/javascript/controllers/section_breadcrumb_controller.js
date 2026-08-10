import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["current"]
  static values = {
    fallback: { type: String, default: "Início" }
  }

  connect() {
    this.sections = Array.from(document.querySelectorAll("[data-section]"))
    this.onScroll = this.onScroll.bind(this)
    this.ticking = false

    window.addEventListener("scroll", this.onScroll, { passive: true })
    window.addEventListener("resize", this.onScroll, { passive: true })
    this.onScroll()
  }

  disconnect() {
    window.removeEventListener("scroll", this.onScroll)
    window.removeEventListener("resize", this.onScroll)
  }

  onScroll() {
    if (this.ticking) return
    this.ticking = true

    requestAnimationFrame(() => {
      this.#update()
      this.ticking = false
    })
  }

  #update() {
    if (!this.hasCurrentTarget || this.sections.length === 0) return

    const offset = this.element.offsetHeight + 24
    const marker = window.scrollY + offset
    let active = this.sections[0]

    for (const section of this.sections) {
      const top = section.getBoundingClientRect().top + window.scrollY
      if (top <= marker) active = section
      else break
    }

    const label = active.dataset.section || this.fallbackValue
    if (this.currentTarget.textContent !== label) {
      this.currentTarget.textContent = label
    }
  }
}
