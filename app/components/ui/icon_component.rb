# frozen_string_literal: true

module Ui
  class IconComponent < ApplicationComponent
    ICONS = {
      "fa-rocket" => :rocket,
      "fa-cubes" => :cubes,
      "fa-gauge-high" => :gauge,
      "fa-people-group" => :people,
      "envelope" => :envelope,
      "linkedin" => :linkedin,
      "pen-ruler" => :pen_ruler,
      "code" => :code,
      "cloud" => :cloud,
      "circle-check" => :circle_check,
      "spinner" => :spinner,
      "globe" => :globe,
      "server" => :server,
      "database" => :database,
      "arrows-left-right" => :arrows,
      "apple" => :apple,
      "android" => :android,
      "chevron-right" => :chevron_right
    }.freeze

    def initialize(name:, class_name: nil)
      @name = name.to_s.delete_prefix("fa-solid ").delete_prefix("fa-brands ").strip
      @class_name = class_name
      @icon = ICONS.fetch(@name) { ICONS.fetch(@name.delete_prefix("fa-"), :globe) }
    end

    def call
      helpers.tag.span(svg.html_safe, class: ["ui-icon", @class_name].compact.join(" "), aria: { hidden: true })
    end

    private

    def svg
      case @icon
      when :rocket
        <<~SVG
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"/><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"/></svg>
        SVG
      when :cubes
        <<~SVG
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m3.27 6.96 8.73 5.05 8.73-5.05"/><path d="M12 22.08V12"/></svg>
        SVG
      when :gauge
        <<~SVG
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
        SVG
      when :people
        <<~SVG
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        SVG
      when :envelope
        <<~SVG
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        SVG
      when :linkedin
        <<~SVG
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7.5 0h3.8v2h.05c.53-1 1.84-2.05 3.8-2.05 4.06 0 4.8 2.67 4.8 6.15V23h-4v-5.8c0-1.38-.03-3.16-1.93-3.16-1.93 0-2.22 1.5-2.22 3.06V23h-4V8.5z"/></svg>
        SVG
      when :pen_ruler
        <<~SVG
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg>
        SVG
      when :code
        <<~SVG
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
        SVG
      when :cloud
        <<~SVG
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
        SVG
      when :circle_check
        <<~SVG
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
        SVG
      when :spinner
        <<~SVG
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
        SVG
      when :globe
        <<~SVG
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
        SVG
      when :server
        <<~SVG
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 6h.01M6 18h.01"/></svg>
        SVG
      when :database
        <<~SVG
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>
        SVG
      when :arrows
        <<~SVG
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></svg>
        SVG
      when :apple
        <<~SVG
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M16.7 7.6c-.1 1.1-.6 2-1.3 2.7-.8.7-1.7 1.2-2.8 1.1-.1-1 .4-2.1 1.1-2.8.8-.8 2.1-1.4 3-1zm3.1 7.1c-.2.6-.5 1.1-.8 1.6-.5.8-1 1.5-1.7 1.5-.7.1-1 .4-1.8.4s-1.1-.4-1.8-.4c-.8 0-1.4.4-1.8.5-.7 0-1.3-.7-1.8-1.5-.9-1.4-1.6-3.9-.7-5.6.5-.9 1.3-1.5 2.2-1.5.7 0 1.3.4 1.8.4s1.3-.5 2.1-.4c.9 0 1.7.5 2.2 1.3-1.9 1-1.6 3.7.1 4.7z"/></svg>
        SVG
      when :android
        <<~SVG
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M17.6 9.5 19 7.1a.4.4 0 0 0-.7-.4l-1.4 2.4A8.3 8.3 0 0 0 12 8a8.3 8.3 0 0 0-4.9 1.1L5.7 6.7a.4.4 0 1 0-.7.4L6.4 9.5A7.7 7.7 0 0 0 4 15.6v.8h16v-.8a7.7 7.7 0 0 0-2.4-6.1zM9 13.4a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6zm6 0a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6zM7 17.4h10v2.2a1 1 0 0 1-1 1h-1.2v2.2h-1.6V20.6H10.8v2.2H9.2V20.6H8a1 1 0 0 1-1-1v-2.2z"/></svg>
        SVG
      when :chevron_right
        <<~SVG
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        SVG
      else
        <<~SVG
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/></svg>
        SVG
      end
    end
  end
end
