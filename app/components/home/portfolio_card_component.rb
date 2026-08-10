# frozen_string_literal: true

module Home
  class PortfolioCardComponent < ApplicationComponent
    with_collection_parameter :project

    def initialize(project:, project_counter: nil, index: nil)
      @project = project
      @index = index || (project_counter ? project_counter - 1 : 0)
    end

    attr_reader :project, :index

    def active?
      index.zero?
    end

    def platform_icon(platform)
      case platform
      when "App Store", "iOS"
        :apple
      when "Google Play", "Android"
        :android
      else
        :web
      end
    end
  end
end
