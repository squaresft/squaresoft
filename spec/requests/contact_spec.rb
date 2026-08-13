# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Contact", type: :request do
  describe "GET /contato" do
    it "renders the contact flow" do
      get contact_url

      expect(response).to have_http_status(:success)
      expect(response.body).to include("contact-flow")
      expect(response.body).to include('data-controller="contact-flow"')
    end

    it "renders english copy" do
      get contact_url(locale: :en)

      expect(response).to have_http_status(:success)
      expect(response.body).to match(/full name/i)
    end
  end
end
