import "../styles/globals.css";
import type { AppProps } from "next/app";

function TutorialApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <article className="prose prose-2xl dark:prose-invert mx-auto p-8 py-16 lg:py-32 ">
        <Component {...pageProps} />
      </article>
    </>
  );
}

export default TutorialApp;
