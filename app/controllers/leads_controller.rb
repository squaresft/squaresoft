# frozen_string_literal: true

class LeadsController < ApplicationController
  def create
    lead = Lead.new(lead_params)

    if lead.save
      render json: { ok: true, id: lead.id }, status: :created
    else
      render json: { ok: false, errors: lead.errors.full_messages }, status: :unprocessable_content
    end
  end

  private

  def lead_params
    params.require(:lead).permit(
      :full_name,
      :email,
      :phone,
      :company_name,
      :inspirations,
      :has_design,
      :kickoff,
      :budget,
      platforms: []
    ).merge(locale: current_locale.to_s)
  end
end
