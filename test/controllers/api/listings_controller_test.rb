require 'test_helper'

class Api::ListingsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_listings_create_url
    assert_response :success
  end

  test "should get index" do
    get api_listings_index_url
    assert_response :success
  end

  test "should get show" do
    get api_listings_show_url
    assert_response :success
  end

end
