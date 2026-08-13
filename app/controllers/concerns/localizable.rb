# frozen_string_literal: true

module Localizable
  extend ActiveSupport::Concern

  included do
    around_action :switch_locale
    helper_method :current_locale, :path_for_locale
  end

  def default_url_options
    { locale: locale_url_param }
  end

  private

  def switch_locale(&action)
    I18n.with_locale(current_locale, &action)
  end

  # Locale comes from the URL scope `(:locale)`, never from the client payload.
  def current_locale
    @current_locale ||= extract_locale_from_url || I18n.default_locale
  end

  def extract_locale_from_url
    requested = params[:locale].presence&.to_sym
    return requested if requested && I18n.available_locales.include?(requested)

    nil
  end

  def locale_url_param
    current_locale == I18n.default_locale ? nil : current_locale
  end

  # Rebuilds the current path for another locale (language switcher).
  def path_for_locale(locale)
    target = locale.to_sym
    locale_opt = target == I18n.default_locale ? nil : target

    if request&.path_parameters.present?
      url_for(request.path_parameters.merge(locale: locale_opt, only_path: true))
    else
      root_path(locale: locale_opt)
    end
  rescue ActionController::UrlGenerationError
    root_path(locale: locale_opt)
  end
end
