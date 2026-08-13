# frozen_string_literal: true

FactoryBot.define do
  factory :lead do
    full_name { FFaker::Name.name }
    email { FFaker::Internet.unique.email }
    phone { FFaker::PhoneNumberBR.phone_number }
    company_name { FFaker::Company.name }
    platforms { %w[web] }
    inspirations { FFaker::Internet.http_url }
    has_design { false }
    kickoff { "within_1_month" }
    budget { "20k_50k" }
    locale { "pt" }
  end
end
