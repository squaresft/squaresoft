# frozen_string_literal: true

module Home
  class AwardsComponent < ApplicationComponent
    CERTS = [
      "PSM 1", "PSM 2", "PSPO 1", "PSPO 2", "PMP", "SAFe", "Oracle", "BlackBelt"
    ].freeze

    def badges
      [
        { label: ht("awards.workana") },
        { label: "Top Firm App Dev 2023" },
        { label: "Top Ruby on Rails 2022" },
        { label: "Clutch 5.0/5.0" },
        { label: "Most Reviewed" }
      ]
    end

    def certs
      CERTS
    end
  end
end
