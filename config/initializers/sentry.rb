# frozen_string_literal: true

if ENV["SENTRY_DSN"].present?
  Sentry.init do |config|
    config.dsn = ENV["SENTRY_DSN"]
    config.breadcrumbs_logger = [ :active_support_logger, :http_logger ]
    config.environment = Rails.env
    config.enabled_environments = %w[production staging]
    config.send_default_pii = false

    # Performance sampling — keep low in production unless you need denser traces.
    config.traces_sample_rate = ENV.fetch("SENTRY_TRACES_SAMPLE_RATE", "0.1").to_f

    config.release = ENV["SENTRY_RELEASE"].presence || ENV["RENDER_GIT_COMMIT"].presence

    filter_exceptions = [
      ActionController::RoutingError,
      ActionController::InvalidAuthenticityToken,
      ActiveRecord::RecordNotFound
    ]

    config.excluded_exceptions += filter_exceptions.map(&:name)

    config.before_send = lambda do |event, hint|
      exception = hint[:exception]
      next nil if exception && filter_exceptions.any? { |klass| exception.is_a?(klass) }

      event
    end
  end
end
