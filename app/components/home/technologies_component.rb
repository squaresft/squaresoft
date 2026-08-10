# frozen_string_literal: true

module Home
  class TechnologiesComponent < ApplicationComponent
    SHOWCASE = [
      "Python", "ReactJS", "Docker", "Javascript", "iOS", "NodeJS",
      "Android", "AWS", "PostgreSQL", "Flutter", "Cloud", "Typescript", "Ruby on Rails"
    ].freeze

    def techs
      SHOWCASE
    end
  end
end
