# frozen_string_literal: true

require "rails_helper"

RSpec.describe Ui::LanguageSwitcherComponent, type: :component do
  it "renders three locale options" do
    render_inline(described_class.new)

    expect(page).to have_css(".lang-option", count: 3, visible: :all)
    expect(page).to have_css(".lang-code", text: "PT", visible: :all)
    expect(page).to have_css(".lang-code", text: "EN", visible: :all)
    expect(page).to have_css(".lang-code", text: "ES", visible: :all)
  end

  it "shows US flag colors for English locale option" do
    I18n.with_locale(:en) do
      render_inline(described_class.new)

      expect(page).to have_css("summary .lang-code", text: "EN")
      expect(page).to have_css("svg rect[fill='#B22234']", visible: :all)
      expect(page).to have_css("svg rect[fill='#3C3B6E']", visible: :all)
    end
  end
end
