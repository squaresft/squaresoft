# frozen_string_literal: true

# Preview at http://localhost:3000/rails/mailers/lead_mailer/received
class LeadMailerPreview < ActionMailer::Preview
  def received
    lead = Lead.new(
      full_name: "Ana Silva",
      email: "ana@example.com",
      phone: "(11) 99999-0000",
      company_name: "Acme",
      platforms: %w[web ios],
      kickoff: "within_1_month",
      budget: "20k_50k",
      has_design: false,
      locale: "pt"
    )

    LeadMailer.with(lead: lead).received
  end
end
