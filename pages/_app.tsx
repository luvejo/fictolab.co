import "styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "layouts/Main";
import PlausibleProvider from "next-plausible";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="fictolab.co">
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </PlausibleProvider>
  );
}

export default MyApp;
