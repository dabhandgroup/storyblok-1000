import { storyblokInit, apiPlugin } from "@storyblok/react";
 
storyblokInit({
  accessToken: "JEgabTQtAuM68BW7zEoNtAtt",
  use: [apiPlugin]
});

import '@styles/globals.css'

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application

 
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
 
const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};
 
storyblokInit({
  accessToken: "your-preview-token",
  use: [apiPlugin],
  components,
});
