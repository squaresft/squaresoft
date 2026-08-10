# frozen_string_literal: true

module Home
  class HeroComponent < ApplicationComponent
    HERO_WIDTH = 1200
    HERO_HEIGHT = 800

    def webp_srcset
      self.class.webp_srcset(helpers)
    end

    def self.webp_srcset(view)
      [
        "#{view.image_path("hero-team-800.webp")} 800w",
        "#{view.image_path("hero-team-1200.webp")} 1200w",
        "#{view.image_path("hero-team.webp")} 1536w"
      ].join(", ")
    end

    def self.preload_href(view)
      view.image_path("hero-team-1200.webp")
    end
  end
end
