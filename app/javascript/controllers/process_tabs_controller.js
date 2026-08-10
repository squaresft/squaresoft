import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["tab", "panel"]
  static values = { index: { type: Number, default: 0 } }

  connect() {
    this.show(this.indexValue)
  }

  select(event) {
    const index = Number(event.currentTarget.dataset.index)
    this.indexValue = index
    this.show(index)
  }

  show(index) {
    this.tabTargets.forEach((tab, i) => {
      tab.classList.toggle("is-active", i === index)
      tab.setAttribute("aria-selected", i === index ? "true" : "false")
    })

    this.panelTargets.forEach((panel, i) => {
      panel.hidden = i !== index
      panel.classList.toggle("is-active", i === index)
    })
  }
}
