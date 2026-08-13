# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Home", type: :request do
  describe "GET /" do
    it "renders the homepage" do
      get root_url

      expect(response).to have_http_status(:success)
      expect(response.body).to include('class="site"')
      expect(response.body).to include('class="hero"')
      expect(response.body).to include("lang-menu")
      expect(response.body).to include('rel="canonical"')
      expect(response.body).to include('hreflang="pt"')
      expect(response.body).to include('hreflang="en"')
      expect(response.body).to include('hreflang="es"')
      expect(response.body).to include('hreflang="x-default"')
      expect(response.body).to include('fetchpriority="high"')
      expect(response.body).to include('application/ld+json')
      expect(response.body).to include('property="og:title"')
    end

    it "renders english locale" do
      get root_url(locale: :en)

      expect(response).to have_http_status(:success)
      expect(response.body).to include(root_url(locale: :en))
    end

    it "renders spanish locale" do
      get root_url(locale: :es)

      expect(response).to have_http_status(:success)
      expect(response.body).to include(root_url(locale: :es))
    end
  end
end
