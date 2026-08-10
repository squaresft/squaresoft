# frozen_string_literal: true

Rails.application.routes.draw do
  scope "(:locale)", locale: /en|es|pt/ do
    root "home#index"
  end
end
