# frozen_string_literal: true

module Home
  class PortfolioComponent < ApplicationComponent
    def projects
      home_items("portfolio.projects").map do |project|
        {
          tags: Array(project[:tags]),
          name: project[:name],
          description: project[:description],
          techs: Array(project[:techs]),
          platforms: Array(project[:platforms]),
          tone: project[:tone].to_i
        }
      end
    end
  end
end
