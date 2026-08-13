# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: -> { ENV.fetch("MAILER_FROM", "SQUARE <hello@squaresoft.com.br>") }
  layout "mailer"
end
