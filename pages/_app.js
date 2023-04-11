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
