# frozen_string_literal: true

class AddProjectDescriptionToLeads < ActiveRecord::Migration[8.1]
  def change
    add_column :leads, :project_description, :text
  end
end
