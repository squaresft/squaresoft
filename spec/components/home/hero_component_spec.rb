# frozen_string_literal: true

require "rails_helper"

RSpec.describe Home::HeroComponent, type: :component do
  it "renders title lines and CTA" do
    I18n.with_locale(:pt) do
      render_inline(described_class.new)

      expect(page).to have_css("h1.hero-title")
      expect(page).to have_css(".hero-title-line", minimum: 3)
      expect(page).to have_css("a.btn--primary[href='#{contact_path}']")
      expect(page).to have_text(I18n.t("home.hero.cta"))
    end
  end

  it "uses responsive picture with fetchpriority for LCP" do
    render_inline(described_class.new)

    expect(page).to have_css("picture source[type='image/webp'][sizes='100vw']")
    expect(page).to have_css("img.hero-photo[fetchpriority='high'][loading='eager'][decoding='async']")
    expect(page).to have_css("img.hero-photo[width='1200'][height='800']")
  end
end
