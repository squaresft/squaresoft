import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["button"]

  connect() {
    this.onScroll = this.onScroll.bind(this)
    window.addEventListener("scroll", this.onScroll, { passive: true })
    this.onScroll()
  }

  disconnect() {
    window.removeEventListener("scroll", this.onScroll)
  }

  onScroll() {
    this.buttonTarget.classList.toggle("is-visible", window.scrollY > 480)
  }

  scroll() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
}
