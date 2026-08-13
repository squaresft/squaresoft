# frozen_string_literal: true

require "rails_helper"

RSpec.describe LeadMailer, type: :mailer do
  describe "#received" do
    let(:lead) { build(:lead, full_name: "Ana Silva", email: "ana@example.com", locale: "pt") }
    let(:mail) { described_class.with(lead: lead).received }

    it "sends to the lead email" do
      expect(mail.to).to eq([ "ana@example.com" ])
    end

    it "uses a localized subject" do
      expect(mail.subject).to eq("Recebemos sua solicitação, Ana")
    end

    it "includes confirmation copy and copyright" do
      body = mail.html_part&.decoded || mail.body.to_s

      expect(body).to include("Recebemos sua solicitação com sucesso")
      expect(body).to include("orçamento")
      expect(body).to include("SQUARE. Todos os direitos reservados.")
    end

    it "respects the lead locale" do
      lead.locale = "en"
      en_mail = described_class.with(lead: lead).received
      body = en_mail.html_part&.decoded || en_mail.body.to_s

      expect(en_mail.subject).to eq("We received your request, Ana")
      expect(body).to include("successfully received your request")
    end
  end
end
