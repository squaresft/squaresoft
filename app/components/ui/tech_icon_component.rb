# frozen_string_literal: true

module Ui
  class TechIconComponent < ApplicationComponent
    ASSETS = {
      "Python" => "tech/python.svg",
      "ReactJS" => "tech/react.svg",
      "React" => "tech/react.svg",
      "Docker" => "tech/docker.svg",
      "Javascript" => "tech/javascript.svg",
      "iOS" => "tech/apple.svg",
      "NodeJS" => "tech/nodedotjs.svg",
      "Node.js" => "tech/nodedotjs.svg",
      "Android" => "tech/android.svg",
      "AWS" => "tech/amazonaws.svg",
      "PostgreSQL" => "tech/postgresql.svg",
      "Flutter" => "tech/flutter.svg",
      "Cloud" => "tech/googlecloud.svg",
      "Google Cloud" => "tech/googlecloud.svg",
      "Typescript" => "tech/typescript.svg",
      "Ruby on Rails" => "tech/rubyonrails.svg",
      "Cloudflare" => "tech/cloudflare.svg",
      "GitHub" => "tech/github.svg",
      "App Store" => "tech/apple.svg",
      "Google Play" => "tech/android.svg"
    }.freeze

    DARK_FILLS = %w[tech/apple.svg tech/github.svg].freeze

    def initialize(name:, class_name: "tech-icon")
      @name = name
      @class_name = class_name
      @asset = ASSETS[name]
    end

    def call
      return mono_fallback unless @asset

      path = Rails.root.join("app/assets/images", @asset)
      return mono_fallback unless path.exist?

      svg = path.read
      svg = svg.sub(/<title>.*?<\/title>/m, "")
      if DARK_FILLS.include?(@asset)
        svg = svg.sub(/fill="#[0-9A-Fa-f]{3,8}"/, 'fill="currentColor"')
      end

      helpers.tag.span(
        svg.html_safe,
        class: [@class_name, "tech-icon--svg"].compact.join(" "),
        aria: { hidden: true }
      )
    end

    private

    def mono_fallback
      helpers.tag.span(@name.to_s[0, 2].upcase, class: "#{@class_name} tech-icon--mono", aria: { hidden: true })
    end
  end
end
