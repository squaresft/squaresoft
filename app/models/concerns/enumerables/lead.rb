# frozen_string_literal: true

module Enumerables
  module Lead
    extend ActiveSupport::Concern

    PLATFORMS = %w[web desktop ios android iot other].freeze

    KICKOFFS = %w[
      immediately
      within_1_month
      within_3_months
      within_6_months
      no_start_date
    ].freeze

    BUDGETS = %w[
      up_to_20k
      20k_50k
      50k_100k
      100k_200k
      200k_500k
      500k_1m
      over_1m
    ].freeze
  end
end
