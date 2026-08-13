# frozen_string_literal: true

require "rails_helper"

RSpec.describe Localizable, type: :controller do
  controller(ApplicationController) do
    def index
      render plain: current_locale.to_s
    end
  end

  before do
    routes.draw { get "anonymous" => "anonymous#index" }
  end

  it "uses the default locale when the URL has no locale segment" do
    get :index
    expect(response.body).to eq("pt")
  end

  it "reads locale from the URL param" do
    get :index, params: { locale: "en" }
    expect(response.body).to eq("en")
  end

  it "falls back to default for unknown locales" do
    get :index, params: { locale: "fr" }
    expect(response.body).to eq("pt")
  end
end
