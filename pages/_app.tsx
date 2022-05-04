import "../styles/globals.css";
import styles from "../styles/glass.module.css";
import type { AppProps } from "next/app";
import steps from "../steps";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import NavBar from "../components/navbar";

function TutorialApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const [menuVisible, setMenu] = React.useState(false);
  const step = steps.get(pathname);
  const prevStep = [...steps.entries()][
    [...steps.keys()].indexOf(pathname) - 1
  ];
  const nextStep = [...steps.entries()][
    [...steps.keys()].indexOf(pathname) + 1
  ];
  return (
    <>
      {step ? (
        <Head>
          <title>{step}</title>
        </Head>
      ) : (
        ""
      )}
      <header
        className={`fixed transition-all transform-gpu ${
          menuVisible ? "translate-y-4 lg:translate-y-14" : ""
        } w-full z-20 top-0`}
      >
        <div className="w-full max-w-screen-lg mx-auto px-2 flex">
          <button
            className="bg-transparent hover:bg-black/5  dark:hover:bg-white/5 px-6 py-4 flex items-center gap-1 font-bold"
            onClick={() => setMenu(!menuVisible)}
          >
            <div>{step}</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transform-gpu transition-transform ${
                menuVisible ? "-rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="flex-1" />
          <div>
            <button
              onClick={() => setMenu(false)}
              className={[
                "bg-transparent hover:bg-black/5 dark:hover:bg-white/5 p-4 flex items-center gap-1 font-bold",
                "rounded-full  transition-opacity",
                menuVisible ? "" : "opacity-0 pointer-events-none",
              ].join(" ")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div
        className={[
          `fixed top-0 left-0 w-full ${
            menuVisible ? "h-screen" : "h-14"
          } overflow-hidden z-10 ${styles.glass}`,
          `transition-all`,
        ].join(" ")}
        aria-hidden={!menuVisible}
      >
        <div
          className={`mx-auto p-8 py-24 lg:py-48 max-w-screen-lg text-4xl transform-gpu transition-all ${
            !menuVisible ? "-translate-y-16 opacity-0" : "translate-y-0"
          }`}
        >
          <ol>
            {[...steps].map(([path, title], n) => (
              <li key={path}>
                <Link href={path}>
                  <a
                    className={[
                      n < [...steps.keys()].indexOf(pathname)
                        ? "opacity-50"
                        : "",
                      path == pathname
                        ? "text-blue-600 dark:text-blue-500"
                        : "text-gray-800 dark:text-gray-200",
                      "transition-all",
                    ].join(" ")}
                    onClick={() => setMenu(false)}
                  >
                    {title}
                  </a>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <article className="prose prose-2xl dark:prose-invert mx-auto p-8 py-16 lg:py-32 ">
        <Component {...pageProps} />

        <NavBar
          prevPage={
            prevStep
              ? {
                  link: prevStep[0],
                  label: prevStep[1],
                }
              : undefined
          }
          nextPage={
            nextStep
              ? {
                  link: nextStep[0],
                  label: nextStep[1],
                }
              : undefined
          }
        />
      </article>
    </>
  );
}

export default TutorialApp;
