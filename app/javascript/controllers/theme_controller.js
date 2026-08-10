import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["button"]

  connect() {
    this.sync()
  }

  toggle() {
    const next = this.theme === "dark" ? "light" : "dark"
    this.apply(next)
    localStorage.setItem("theme", next)
  }

  get theme() {
    return document.documentElement.dataset.theme === "light" ? "light" : "dark"
  }

  apply(theme) {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    this.sync()
  }

  sync() {
    const isDark = this.theme === "dark"
    if (!this.hasButtonTarget) return

    const lightLabel = this.buttonTarget.dataset.labelLight || "Light theme"
    const darkLabel = this.buttonTarget.dataset.labelDark || "Dark theme"
    this.buttonTarget.setAttribute("aria-label", isDark ? lightLabel : darkLabel)
    this.buttonTarget.setAttribute("aria-pressed", isDark ? "false" : "true")
    this.buttonTarget.dataset.theme = this.theme
  }
}
