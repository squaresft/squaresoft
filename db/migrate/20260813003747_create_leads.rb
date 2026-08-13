# frozen_string_literal: true

class CreateLeads < ActiveRecord::Migration[8.1]
  def change
    create_table :leads do |t|
      t.string :full_name, null: false
      t.string :email, null: false
      t.string :phone, null: false
      t.string :company_name, null: false
      t.jsonb :platforms, null: false, default: []
      t.text :inspirations
      t.boolean :has_design, null: false, default: false
      t.string :kickoff, null: false
      t.string :budget, null: false
      t.string :locale, null: false, default: "pt"

      t.timestamps
    end

    add_index :leads, :email
    add_index :leads, :created_at
  end
end
