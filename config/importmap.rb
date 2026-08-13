# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "sentry"
pin "@sentry/browser", to: "@sentry--browser.js" # @10.70.0
pin "@sentry/browser-utils", to: "@sentry--browser-utils.js" # @10.70.0
pin "@sentry/conventions/attributes", to: "@sentry--conventions--attributes.js" # @0.16.0
pin "@sentry/core", to: "@sentry--core.js" # @10.70.0
pin "@sentry/core/browser", to: "@sentry--core--browser.js" # @10.70.0
pin "@sentry/feedback", to: "@sentry--feedback.js" # @10.70.0
pin "@sentry/replay", to: "@sentry--replay.js" # @10.70.0
pin "@sentry/replay-canvas", to: "@sentry--replay-canvas.js" # @10.70.0
