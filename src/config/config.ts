import * as Contentstack from "contentstack";

const Stack = Contentstack.Stack(
    globalThis.CONTENTSTACK_API_KEY,
    globalThis.CONTENTSTACK_DELIVERY_TOKEN,
    globalThis.APP_ENV,
    Contentstack.Region.EU
  );

const Google = {
  API_KEY: globalThis.GOOGLEMAPS_API_KEY
}

export {
  Stack,
  Google
}
