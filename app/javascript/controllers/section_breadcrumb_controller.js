import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["current"]
  static values = {
    fallback: { type: String, default: "Início" }
  }

  connect() {
    this.sections = Array.from(document.querySelectorAll("[data-section]"))
    this.activeLabel = null
    this.ratios = new Map()

    if (this.sections.length === 0 || !this.hasCurrentTarget) return

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          this.ratios.set(entry.target, entry.intersectionRatio)
        })
        this.#syncLabel()
      },
      {
        root: null,
        // Header sticky ~ header + breadcrumb
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    )

    this.sections.forEach((section) => this.observer.observe(section))
    this.#syncLabel()
  }

  disconnect() {
    this.observer?.disconnect()
  }

  #syncLabel() {
    let best = this.sections[0]
    let bestRatio = -1

    this.sections.forEach((section) => {
      const ratio = this.ratios.get(section) || 0
      if (ratio > bestRatio) {
        bestRatio = ratio
        best = section
      }
    })

    const label = best?.dataset.section || this.fallbackValue
    if (label !== this.activeLabel) {
      this.activeLabel = label
      this.currentTarget.textContent = label
    }
  }
}
