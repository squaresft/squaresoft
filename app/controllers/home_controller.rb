# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    fresh_when(
      etag: [ I18n.locale, ApplicationComponent.home_content_digest ],
      public: true
    )
  end
end
