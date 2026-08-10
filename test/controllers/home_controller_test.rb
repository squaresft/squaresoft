# frozen_string_literal: true

require "test_helper"

class HomeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get root_url
    assert_response :success
    assert_select ".site"
    assert_select ".hero"
    assert_select ".lang-menu"
    assert_select "link[rel='canonical']"
    assert_select "link[rel='alternate'][hreflang='pt']"
    assert_select "link[rel='alternate'][hreflang='en']"
    assert_select "link[rel='alternate'][hreflang='es']"
    assert_select "link[rel='alternate'][hreflang='x-default']"
    assert_select "link[rel='preload'][as='image'][fetchpriority='high']"
    assert_select "script[type='application/ld+json']"
    assert_select "meta[property='og:title']"
  end

  test "should get english locale" do
    get root_url(locale: :en)
    assert_response :success
    assert_select "link[rel='canonical'][href=?]", root_url(locale: :en)
  end

  test "should get spanish locale" do
    get root_url(locale: :es)
    assert_response :success
    assert_select "link[rel='canonical'][href=?]", root_url(locale: :es)
  end
end
