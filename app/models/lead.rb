# frozen_string_literal: true

class Lead < ApplicationRecord
  include Enumerables::Lead
  include LeadPlatformsInterface

  after_create_commit :send_received_email

  validates :full_name, presence: true, length: { maximum: 100 }
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :phone, presence: true, length: { maximum: 40 }
  validates :company_name, presence: true, length: { maximum: 100 }
  validates :platforms, presence: true
  validates :kickoff, presence: true, inclusion: { in: KICKOFFS }
  validates :budget, presence: true, inclusion: { in: BUDGETS }
  validates :locale, presence: true
  validates :has_design, inclusion: { in: [ true, false ] }

  private

  def send_received_email
    LeadMailer.with(lead: self).received.deliver_later
  rescue StandardError => error
    Rails.logger.error("[LeadMailer] enqueue failed for lead=#{id}: #{error.class}: #{error.message}")
    Sentry.capture_exception(error, extra: { lead_id: id, email: email, locale: locale }) if Sentry.initialized?
  end
end
