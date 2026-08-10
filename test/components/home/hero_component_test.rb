# frozen_string_literal: true

require "test_helper"

class Home::HeroComponentTest < ComponentTestCase
  test "renders title lines and CTA" do
    I18n.with_locale(:pt) do
      render_inline(Home::HeroComponent.new)

      assert_selector "h1.hero-title"
      assert_selector ".hero-title-line", minimum: 3
      assert_selector "a.btn--primary[href='#contato']"
      assert_text I18n.t("home.hero.cta")
    end
  end

  test "uses responsive picture with fetchpriority for LCP" do
    render_inline(Home::HeroComponent.new)

    assert_selector "picture source[type='image/webp'][sizes='100vw']"
    assert_selector "img.hero-photo[fetchpriority='high'][loading='eager'][decoding='async']"
    assert_selector "img.hero-photo[width='1200'][height='800']"
  end
end
