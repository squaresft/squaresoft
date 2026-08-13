const dsn = document.querySelector("meta[name='sentry-dsn']")?.content

if (dsn) {
  import("@sentry/browser").then((Sentry) => {
    Sentry.init({
      dsn,
      environment: document.querySelector("meta[name='sentry-environment']")?.content || "production",
      release: document.querySelector("meta[name='sentry-release']")?.content || undefined,
      tracesSampleRate: Number(document.querySelector("meta[name='sentry-traces-sample-rate']")?.content || "0.1"),
      ignoreErrors: [
        "ResizeObserver loop limit exceeded",
        "ResizeObserver loop completed with undelivered notifications"
      ]
    })

    window.Sentry = Sentry
  }).catch(() => {
    // Ignore loader failures so the app keeps working offline / blocked.
  })
}
