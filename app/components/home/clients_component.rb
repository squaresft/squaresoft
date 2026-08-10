# frozen_string_literal: true

module Home
  class ClientsComponent < ApplicationComponent
    CLIENT_COMPANIES = [
      "Cedro Technologies",
      "Startup Culture",
      "Eicon Brasil",
      "Asis IT",
      "Doutor Direto",
      "Influenciaê",
      "99formulas",
      "Video.bot",
      "RubyHero",
      "Portal Fronteiriço",
      "Funding Circle",
      "Repassa",
      "Avantsoft",
      "Grafeno",
      "Skydropx"
    ].freeze

    def companies
      CLIENT_COMPANIES
    end
  end
end
