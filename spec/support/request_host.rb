# frozen_string_literal: true

RSpec.configure do |config|
  config.before(:each, type: :request) do
    host! "www.example.com"
  end
end
