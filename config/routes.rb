# frozen_string_literal: true

Rails.application.routes.draw do
  scope "(:locale)", locale: /en|es|pt/ do
    root "home#index"
    get "contato", to: "contact#show", as: :contact
    post "leads", to: "leads#create", as: :leads
  end
end
