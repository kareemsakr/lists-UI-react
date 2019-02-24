import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://a7f7135cd1ec48929e16f218b5fd65de@sentry.io/1326407"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default { init, log };
