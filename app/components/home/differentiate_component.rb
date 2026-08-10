# frozen_string_literal: true

module Home
  class DifferentiateComponent < ApplicationComponent
    def cards
      home_items("differentiate.cards")
    end
  end
end
