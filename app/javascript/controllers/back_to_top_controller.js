import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["button"]

  connect() {
    if (!this.hasButtonTarget) return

    this.onScroll = () => {
      if (this.ticking) return
      this.ticking = true
      requestAnimationFrame(() => {
        const show = window.scrollY > 480
        this.buttonTarget.classList.toggle("is-visible", show)
        this.ticking = false
      })
    }

    window.addEventListener("scroll", this.onScroll, { passive: true })
    // Não ler scrollY no connect — evita forced reflow no first paint
  }

  disconnect() {
    window.removeEventListener("scroll", this.onScroll)
  }

  scroll() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
}
