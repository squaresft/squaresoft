# frozen_string_literal: true

require "test_helper"

class Ui::LanguageSwitcherComponentTest < ComponentTestCase
  test "renders three locale options" do
    render_inline(Ui::LanguageSwitcherComponent.new)

    assert_selector ".lang-option", count: 3, visible: :all
    assert_selector ".lang-code", text: "PT", visible: :all
    assert_selector ".lang-code", text: "EN", visible: :all
    assert_selector ".lang-code", text: "ES", visible: :all
  end

  test "shows US flag colors for English locale option" do
    I18n.with_locale(:en) do
      render_inline(Ui::LanguageSwitcherComponent.new)

      assert_selector "summary .lang-code", text: "EN"
      assert_selector "svg rect[fill='#B22234']", visible: :all
      assert_selector "svg rect[fill='#3C3B6E']", visible: :all
    end
  end
end
