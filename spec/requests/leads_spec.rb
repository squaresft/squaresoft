# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Leads", type: :request do
  describe "POST /leads" do
    let(:attrs) do
      attributes_for(:lead).except(:locale).merge(
        platforms: %w[web android],
        has_design: true,
        kickoff: "immediately",
        budget: "up_to_20k"
      )
    end

    it "creates a lead with valid payload" do
      expect {
        post leads_path, params: { lead: attrs }, as: :json
      }.to change(Lead, :count).by(1)
        .and have_enqueued_mail(LeadMailer, :received)

      expect(response).to have_http_status(:created)
      body = JSON.parse(response.body)
      expect(body["ok"]).to eq(true)
      expect(Lead.last.email).to eq(attrs[:email])
      expect(Lead.last.locale).to eq("pt")
    end

    it "persists locale from the URL scope" do
      post leads_path(locale: :en), params: { lead: attrs }, as: :json

      expect(response).to have_http_status(:created)
      expect(Lead.last.locale).to eq("en")
    end

    it "ignores locale sent in the payload and uses the URL" do
      post leads_path(locale: :es), params: { lead: attrs.merge(locale: "en") }, as: :json

      expect(response).to have_http_status(:created)
      expect(Lead.last.locale).to eq("es")
    end

    it "rejects an invalid lead" do
      expect {
        post leads_path, params: { lead: { full_name: "" } }, as: :json
      }.not_to change(Lead, :count)

      expect(response).to have_http_status(:unprocessable_content)
      expect(ActionMailer::Base.deliveries).to be_empty
      expect(enqueued_jobs).to be_empty

      body = JSON.parse(response.body)
      expect(body["ok"]).to eq(false)
    end
  end
end
