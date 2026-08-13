# frozen_string_literal: true

module Contact
  class FlowComponent < ApplicationComponent
    PLATFORM_ICONS = {
      "web" => :globe,
      "desktop" => :desktop,
      "ios" => :apple,
      "android" => :android,
      "iot" => :iot,
      "other" => :other
    }.freeze

    def leads_url
      helpers.leads_path
    end

    def home_url
      helpers.root_path
    end

    def platform_options
      Lead::PLATFORMS.map do |value|
        {
          value: value,
          label: ht("contact.options.platforms.#{value}"),
          icon: PLATFORM_ICONS.fetch(value, :other)
        }
      end
    end

    def kickoff_options
      option_list("kickoffs", Lead::KICKOFFS)
    end

    def budget_options
      option_list("budgets", Lead::BUDGETS)
    end

    def design_options
      [
        { value: "true", label: ht("contact.options.design.yes") },
        { value: "false", label: ht("contact.options.design.no") }
      ]
    end

    def platform_icon_svg(name)
      case name
      when :globe
        <<~SVG.html_safe
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.7"/><path d="M3 12h18M12 3c2.8 2.4 4.2 5.5 4.2 9s-1.4 6.6-4.2 9c-2.8-2.4-4.2-5.5-4.2-9S9.2 5.4 12 3Z" stroke="currentColor" stroke-width="1.7"/></svg>
        SVG
      when :desktop
        <<~SVG.html_safe
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M8 20h8M12 16v4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>
        SVG
      when :apple
        <<~SVG.html_safe
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.7 12.6c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.6.8-3.3.8-.7 0-1.8-.8-3-.8-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 0.8 1.2 1.7 2.4 2.9 2.4 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.3 0 2.1-1.2 2.9-2.3.9-1.3 1.2-2.6 1.3-2.6-.1 0-2.4-.9-2.4-3.7ZM14.8 5.9c.6-.8 1.1-1.9.9-3-0.9.1-2 .6-2.6 1.4-.6.7-1.1 1.8-.9 2.9 1 .1 2-.5 2.6-1.3Z"/></svg>
        SVG
      when :android
        <<~SVG.html_safe
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 10v7M17 10v7M9 20v-2h6v2M8 10h8a3 3 0 0 1 3 3v4H5v-4a3 3 0 0 1 3-3Z" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="m8 7 1.5 2M16 7l-1.5 2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>
        SVG
      when :iot
        <<~SVG.html_safe
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8.5 15.5a5 5 0 0 1 7 0M6 13a8 8 0 0 1 12 0" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="12" cy="18" r="1.4" fill="currentColor"/><rect x="9" y="4" width="6" height="5" rx="1.2" stroke="currentColor" stroke-width="1.7"/></svg>
        SVG
      else
        <<~SVG.html_safe
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="6" cy="12" r="1.6" fill="currentColor"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/><circle cx="18" cy="12" r="1.6" fill="currentColor"/></svg>
        SVG
      end
    end

    private

    def option_list(group, values)
      values.map { |value| { value: value, label: ht("contact.options.#{group}.#{value}") } }
    end
  end
end
