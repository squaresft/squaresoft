# frozen_string_literal: true

module ApplicationHelper
  def html_lang
    case I18n.locale
    when :en then "en"
    when :es then "es"
    else "pt-BR"
    end
  end
end
