# frozen_string_literal: true

class ApplicationController < ActionController::Base
  include Localizable

  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern unless Rails.env.test?

  # Changes to the importmap will invalidate the etag for HTML responses
  stale_when_importmap_changes

  before_action :set_sentry_context

  private

  def set_sentry_context
    return unless defined?(Sentry) && Sentry.initialized?

    Sentry.set_tags(locale: current_locale.to_s)
  end
end
