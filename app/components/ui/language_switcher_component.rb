# frozen_string_literal: true

module Ui
  class LanguageSwitcherComponent < ApplicationComponent
    LOCALE_OPTIONS = [
      { locale: :pt, code: "PT", label: "Português" },
      { locale: :en, code: "EN", label: "English" },
      { locale: :es, code: "ES", label: "Español" }
    ].freeze

    def locale_options
      LOCALE_OPTIONS
    end

    def current_locale_option
      locale_options.find { |option| option[:locale] == I18n.locale } || locale_options.first
    end

    def locale_root_path(locale = I18n.locale)
      helpers.path_for_locale(locale)
    end

    def locale_flag_svg(locale)
      case locale.to_sym
      when :en
        <<~SVG.html_safe
          <svg width="22" height="15" viewBox="0 0 22 15" fill="none" aria-hidden="true">
            <rect width="22" height="15" rx="2" fill="#B22234"/>
            <path d="M0 1.15h22M0 3.46h22M0 5.77h22M0 8.08h22M0 10.38h22M0 12.69h22" stroke="#fff" stroke-width="1.15"/>
            <rect width="9.2" height="8.08" rx="1" fill="#3C3B6E"/>
            <g fill="#fff">
              <circle cx="1.6" cy="1.4" r="0.35"/><circle cx="3.2" cy="1.4" r="0.35"/><circle cx="4.8" cy="1.4" r="0.35"/><circle cx="6.4" cy="1.4" r="0.35"/><circle cx="8" cy="1.4" r="0.35"/>
              <circle cx="2.4" cy="2.5" r="0.35"/><circle cx="4" cy="2.5" r="0.35"/><circle cx="5.6" cy="2.5" r="0.35"/><circle cx="7.2" cy="2.5" r="0.35"/>
              <circle cx="1.6" cy="3.6" r="0.35"/><circle cx="3.2" cy="3.6" r="0.35"/><circle cx="4.8" cy="3.6" r="0.35"/><circle cx="6.4" cy="3.6" r="0.35"/><circle cx="8" cy="3.6" r="0.35"/>
              <circle cx="2.4" cy="4.7" r="0.35"/><circle cx="4" cy="4.7" r="0.35"/><circle cx="5.6" cy="4.7" r="0.35"/><circle cx="7.2" cy="4.7" r="0.35"/>
              <circle cx="1.6" cy="5.8" r="0.35"/><circle cx="3.2" cy="5.8" r="0.35"/><circle cx="4.8" cy="5.8" r="0.35"/><circle cx="6.4" cy="5.8" r="0.35"/><circle cx="8" cy="5.8" r="0.35"/>
              <circle cx="2.4" cy="6.9" r="0.35"/><circle cx="4" cy="6.9" r="0.35"/><circle cx="5.6" cy="6.9" r="0.35"/><circle cx="7.2" cy="6.9" r="0.35"/>
            </g>
          </svg>
        SVG
      when :es
        <<~SVG.html_safe
          <svg width="22" height="15" viewBox="0 0 22 15" fill="none" aria-hidden="true">
            <rect width="22" height="15" rx="2" fill="#AA151B"/>
            <rect y="3.75" width="22" height="7.5" fill="#F1BF00"/>
            <rect x="4.2" y="5.4" width="2.4" height="4.2" rx="0.3" fill="#AA151B"/>
            <rect x="4.55" y="5.75" width="1.7" height="1.1" fill="#F1BF00"/>
          </svg>
        SVG
      else
        <<~SVG.html_safe
          <svg width="22" height="15" viewBox="0 0 22 15" fill="none" aria-hidden="true">
            <rect width="22" height="15" rx="2" fill="#009B3A"/>
            <path d="M11 2L19 7.5L11 13L3 7.5L11 2Z" fill="#FEDF00"/>
            <circle cx="11" cy="7.5" r="3.2" fill="#002776"/>
          </svg>
        SVG
      end
    end
  end
end
