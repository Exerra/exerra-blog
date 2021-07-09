import "normalize.css";
import { AppProps } from "next/app";
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "../../public/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "93d7b160ff894240a6430c40d4fb0eb9"}'></script>
}
