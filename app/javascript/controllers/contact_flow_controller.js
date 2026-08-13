import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [
    "shell",
    "card",
    "progress",
    "step",
    "success",
    "actions",
    "back",
    "next",
    "nextLabel",
    "nextChevron",
    "input",
    "error",
    "counter"
  ]

  static values = {
    createUrl: String,
    totalSteps: { type: Number, default: 9 }
  }

  connect() {
    this.index = 0
    this.submitting = false
    this.data = {
      full_name: "",
      email: "",
      phone: "",
      company_name: "",
      platforms: [],
      inspirations: "",
      has_design: null,
      kickoff: "",
      budget: ""
    }

    this.messages = {
      required: this.element.dataset.msgRequired || "Required",
      email: this.element.dataset.msgEmail || "Enter a valid email",
      platforms: this.element.dataset.msgPlatforms || "Select at least one option",
      choice: this.element.dataset.msgChoice || "Select an option",
      submit: this.element.dataset.msgSubmit || "Could not submit. Try again."
    }

    this.onInput = this.onInput.bind(this)
    this.element.addEventListener("input", this.onInput)

    this.render()
  }

  disconnect() {
    this.element.removeEventListener("input", this.onInput)
  }

  onInput(event) {
    const step = this.currentStep
    if (!step || !event.target.matches?.("input")) return
    this.updateCounter(step)
    this.clearError(step)
  }

  maskPhone(event) {
    const input = event.currentTarget
    const digits = input.value.replace(/\D/g, "").slice(0, 11)
    input.value = this.#formatPhone(digits)
    this.updateCounter(this.currentStep)
    this.clearError(this.currentStep)
  }

  #formatPhone(digits) {
    if (digits.length === 0) return ""
    if (digits.length <= 2) return `(${digits}`
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    if (digits.length <= 10) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
    }
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  }

  back(event) {
    event?.preventDefault()
    if (this.index <= 0 || this.submitting) return
    this.persistCurrent()
    this.index -= 1
    this.render()
  }

  async next(event) {
    event?.preventDefault()
    if (this.submitting) return

    if (!this.validateCurrent()) return
    this.persistCurrent()

    if (this.index >= this.totalStepsValue - 1) {
      await this.submit()
      return
    }

    this.index += 1
    this.render()
  }

  toggleOption(event) {
    const button = event.currentTarget
    const step = this.currentStep
    if (!step || step.dataset.type !== "multi") return

    const value = button.dataset.value
    const selected = new Set(this.data.platforms)
    if (selected.has(value)) selected.delete(value)
    else selected.add(value)
    this.data.platforms = Array.from(selected)

    button.classList.toggle("is-selected", selected.has(value))
    button.setAttribute("aria-pressed", selected.has(value) ? "true" : "false")
    this.clearError(step)
  }

  selectOption(event) {
    const button = event.currentTarget
    const step = this.currentStep
    if (!step || step.dataset.type !== "single") return

    const field = step.dataset.field
    const value = button.dataset.value

    if (field === "has_design") this.data.has_design = value === "true"
    else this.data[field] = value

    step.querySelectorAll(".contact-flow-option").forEach((el) => {
      const on = el === button
      el.classList.toggle("is-selected", on)
      el.setAttribute("aria-pressed", on ? "true" : "false")
    })

    this.clearError(step)
  }

  get currentStep() {
    return this.stepTargets[this.index]
  }

  persistCurrent() {
    const step = this.currentStep
    if (!step) return
    const field = step.dataset.field
    const type = step.dataset.type

    if (type === "text" || type === "email") {
      const input = step.querySelector("input")
      this.data[field] = (input?.value || "").trim()
    }
  }

  validateCurrent() {
    const step = this.currentStep
    if (!step) return false

    const type = step.dataset.type
    const required = step.dataset.required === "true"
    const field = step.dataset.field

    this.clearError(step)

    if (type === "text" || type === "email") {
      const input = step.querySelector("input")
      const value = (input?.value || "").trim()
      if (required && !value) {
        this.showError(step, this.messages.required)
        input?.focus()
        return false
      }
      if (type === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        this.showError(step, this.messages.email)
        input?.focus()
        return false
      }
      return true
    }

    if (type === "multi") {
      if (required && this.data.platforms.length === 0) {
        this.showError(step, this.messages.platforms)
        return false
      }
      return true
    }

    if (type === "single") {
      const value = field === "has_design" ? this.data.has_design : this.data[field]
      if (required && (value === null || value === "" || value === undefined)) {
        this.showError(step, this.messages.choice)
        return false
      }
      return true
    }

    return true
  }

  async submit() {
    this.submitting = true
    this.nextTarget.disabled = true

    const token = document.querySelector("meta[name='csrf-token']")?.content
    const payload = {
      lead: {
        ...this.data,
        has_design: Boolean(this.data.has_design)
      }
    }

    try {
      const response = await fetch(this.createUrlValue, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-CSRF-Token": token || ""
        },
        body: JSON.stringify(payload),
        credentials: "same-origin"
      })

      if (!response.ok) {
        const body = await response.json().catch(() => ({}))
        const message = Array.isArray(body.errors) ? body.errors.join(", ") : this.messages.submit
        this.showError(this.currentStep, message)
        this.submitting = false
        this.nextTarget.disabled = false
        return
      }

      this.showSuccess()
    } catch (_) {
      this.showError(this.currentStep, this.messages.submit)
      this.submitting = false
      this.nextTarget.disabled = false
    }
  }

  showSuccess() {
    this.stepTargets.forEach((step) => {
      step.hidden = true
      step.classList.remove("is-active")
    })
    if (this.hasActionsTarget) this.actionsTarget.hidden = true
    if (this.hasSuccessTarget) {
      this.successTarget.hidden = false
      this.successTarget.classList.add("is-active")
    }
    if (this.hasProgressTarget) this.progressTarget.style.height = "100%"
  }

  render() {
    this.stepTargets.forEach((step, i) => {
      const active = i === this.index
      step.hidden = !active
      step.classList.toggle("is-active", active)
    })

    if (this.hasSuccessTarget) {
      this.successTarget.hidden = true
      this.successTarget.classList.remove("is-active")
    }
    if (this.hasActionsTarget) this.actionsTarget.hidden = false

    const pct = ((this.index + 1) / this.totalStepsValue) * 100
    if (this.hasProgressTarget) this.progressTarget.style.height = `${pct}%`

    if (this.hasBackTarget) this.backTarget.hidden = this.index === 0

    if (this.hasNextTarget) {
      const last = this.index >= this.totalStepsValue - 1
      const label = last
        ? (this.element.dataset.labelFinish || "Finish")
        : (this.element.dataset.labelNext || "Next")

      if (this.hasNextLabelTarget) this.nextLabelTarget.textContent = label
      else this.nextTarget.textContent = label

      if (this.hasNextChevronTarget) this.nextChevronTarget.hidden = last
      this.nextTarget.disabled = false
    }

    this.restoreStepUI()
    const step = this.currentStep
    const input = step?.querySelector("input")
    if (input) {
      input.focus({ preventScroll: true })
      this.updateCounter(step)
    }
  }

  restoreStepUI() {
    const step = this.currentStep
    if (!step) return

    const field = step.dataset.field
    const type = step.dataset.type

    if (type === "text" || type === "email") {
      const input = step.querySelector("input")
      if (input) input.value = this.data[field] || ""
      return
    }

    if (type === "multi") {
      const selected = new Set(this.data.platforms)
      step.querySelectorAll(".contact-flow-platform, .contact-flow-option").forEach((el) => {
        const on = selected.has(el.dataset.value)
        el.classList.toggle("is-selected", on)
        el.setAttribute("aria-pressed", on ? "true" : "false")
      })
      return
    }

    if (type === "single") {
      const current = field === "has_design"
        ? (this.data.has_design === null ? "" : String(this.data.has_design))
        : this.data[field]
      step.querySelectorAll(".contact-flow-option").forEach((el) => {
        const on = el.dataset.value === current
        el.classList.toggle("is-selected", on)
        el.setAttribute("aria-pressed", on ? "true" : "false")
      })
    }
  }

  updateCounter(step) {
    const input = step.querySelector("input")
    const counter = step.querySelector("[data-contact-flow-target='counter']")
    if (!input || !counter) return
    counter.textContent = String((input.value || "").length)
  }

  showError(step, message) {
    const error = step.querySelector("[data-contact-flow-target='error']")
    if (!error) return
    error.textContent = message
    error.hidden = false
  }

  clearError(step) {
    const error = step.querySelector("[data-contact-flow-target='error']")
    if (!error) return
    error.textContent = ""
    error.hidden = true
  }
}
