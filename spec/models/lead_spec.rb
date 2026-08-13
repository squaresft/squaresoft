# frozen_string_literal: true

require "rails_helper"

RSpec.describe Lead, type: :model do
  subject(:lead) { build(:lead) }

  it { is_expected.to validate_presence_of(:full_name) }
  it { is_expected.to validate_length_of(:full_name).is_at_most(100) }
  it { is_expected.to validate_presence_of(:email) }
  it { is_expected.to validate_presence_of(:phone) }
  it { is_expected.to validate_length_of(:phone).is_at_most(40) }
  it { is_expected.to validate_presence_of(:company_name) }
  it { is_expected.to validate_length_of(:company_name).is_at_most(100) }
  it { is_expected.to validate_presence_of(:platforms) }
  it { is_expected.to validate_presence_of(:kickoff) }
  it { is_expected.to validate_inclusion_of(:kickoff).in_array(Lead::KICKOFFS) }
  it { is_expected.to validate_presence_of(:budget) }
  it { is_expected.to validate_inclusion_of(:budget).in_array(Lead::BUDGETS) }
  it { is_expected.to validate_presence_of(:locale) }
  it { is_expected.to allow_value(true).for(:has_design) }
  it { is_expected.to allow_value(false).for(:has_design) }

  it "is valid with factory attributes" do
    expect(lead).to be_valid
  end

  it "rejects unknown platforms" do
    lead.platforms = %w[web spaceship]
    expect(lead).not_to be_valid
    expect(lead.errors[:platforms]).to be_present
  end

  it "rejects invalid email format" do
    lead.email = "not-an-email"
    expect(lead).not_to be_valid
    expect(lead.errors[:email]).to be_present
  end
end
