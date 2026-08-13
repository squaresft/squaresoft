# frozen_string_literal: true

module LeadPlatformsInterface
  extend ActiveSupport::Concern

  included do
    before_validation :normalize_platforms
    validate :platforms_must_be_known
  end

  private

  def normalize_platforms
    self.platforms = sanitized_platforms
  end

  def platforms_must_be_known
    return if platforms.blank? || unknown_platforms.empty?

    errors.add(:platforms, :invalid)
  end

  def sanitized_platforms
    Array(platforms).filter_map { |value| value.to_s.strip.presence }.uniq
  end

  def unknown_platforms
    platforms - self.class::PLATFORMS
  end
end
