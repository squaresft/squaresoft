# frozen_string_literal: true

require "ffaker"

RSpec.configure do |config|
  config.before(:each) do
    FFaker::Random.seed = RSpec.configuration.seed
  end
end
