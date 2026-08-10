import { Controller } from "@hotwired/stimulus"

// Um projeto por slide, no layout de card da referência.
export default class extends Controller {
  static targets = ["slide", "dot"]
  static values = { index: { type: Number, default: 0 } }

  connect() {
    this.show(this.indexValue)
  }

  next() {
    this.show((this.indexValue + 1) % this.slideTargets.length)
  }

  prev() {
    this.show((this.indexValue - 1 + this.slideTargets.length) % this.slideTargets.length)
  }

  goTo(event) {
    this.show(Number(event.currentTarget.dataset.index))
  }

  show(index) {
    this.indexValue = index

    this.slideTargets.forEach((slide, i) => {
      const active = i === index
      slide.classList.toggle("is-active", active)
      slide.hidden = !active
      slide.setAttribute("aria-hidden", active ? "false" : "true")
    })

    this.dotTargets.forEach((dot, i) => {
      const active = i === index
      dot.classList.toggle("is-active", active)
      dot.setAttribute("aria-current", active ? "true" : "false")
    })
  }
}
