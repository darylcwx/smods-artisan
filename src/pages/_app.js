import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import Nav from "@/components/nav.js";
import "../styles/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Smods Artisan</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/svgs/filled v2.svg" />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
          globalStyles: (theme) => ({
            body: {
              marginTop: "60px",
            },
          }),
        }}>
        <Nav />
        <Notifications />

        <Component {...pageProps} />
      </MantineProvider>
      {/* </ColorSchemeProvider> */}
    </>
  );
}
