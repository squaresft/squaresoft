# frozen_string_literal: true

class LeadMailer < ApplicationMailer
  def received
    @lead = params[:lead]
    @year = Time.current.year

    I18n.with_locale(@lead.locale.presence || I18n.default_locale) do
      mail(
        to: @lead.email,
        subject: t("lead_mailer.received.subject", name: @lead.full_name.split.first)
      )
    end
  end
end
