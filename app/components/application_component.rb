# frozen_string_literal: true

class ApplicationComponent < ViewComponent::Base
  TECH_ICONS = {
    "Python" => "devicon-python-plain",
    "ReactJS" => "devicon-react-original",
    "React" => "devicon-react-original",
    "Docker" => "devicon-docker-plain",
    "Javascript" => "devicon-javascript-plain",
    "iOS" => "devicon-apple-original",
    "NodeJS" => "devicon-nodejs-plain",
    "Node.js" => "devicon-nodejs-plain",
    "Android" => "devicon-android-plain",
    "AWS" => "devicon-amazonwebservices-plain-wordmark",
    "PostgreSQL" => "devicon-postgresql-plain",
    "Flutter" => "devicon-flutter-plain",
    "Cloud" => "devicon-googlecloud-plain",
    "Google Cloud" => "devicon-googlecloud-plain",
    "Typescript" => "devicon-typescript-plain",
    "Ruby on Rails" => "devicon-rails-plain",
    "Cloudflare" => "devicon-cloudflare-plain",
    "GitHub" => "devicon-github-original"
  }.freeze

  def ht(key, **)
    I18n.t("home.#{key}", **)
  end

  def home_items(key)
    @_home_items ||= {}
    @_home_items[key] ||= Array(I18n.t("home.#{key}")).map do |item|
      item.respond_to?(:with_indifferent_access) ? item.with_indifferent_access : item
    end
  end

  def tech_icon_class(name)
    TECH_ICONS.fetch(name, "devicon-devicon-plain")
  end

  def home_content_digest
    self.class.home_content_digest
  end

  def cache_component(name, &)
    helpers.cache([I18n.locale, "home-#{name}", home_content_digest], &)
  end

  def self.home_content_digest
    @home_content_digest ||= begin
      files = Dir[Rails.root.join("config/locales/home.*.yml")].sort
      Digest::MD5.hexdigest(files.map { |path| "#{path}:#{File.mtime(path).to_i}:#{File.size(path)}" }.join("|"))
    end
  end

  def self.reset_home_content_digest!
    @home_content_digest = nil
  end
end
