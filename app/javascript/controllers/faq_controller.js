import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["item", "button", "panel"]

  toggle(event) {
    const button = event.currentTarget
    const item = button.closest("[data-faq-target='item']")
    const panel = item?.querySelector("[data-faq-target='panel']")
    if (!panel) return

    const open = button.getAttribute("aria-expanded") === "true"
    button.setAttribute("aria-expanded", open ? "false" : "true")
    panel.hidden = open
    item.classList.toggle("is-open", !open)
  }
}
