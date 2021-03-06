import Link from "next/link";
import { LinkButton } from "./button";

interface PageLink {
  label: string;
  link: string;
}

const NavBar: React.FC<{
  children?: never;
  nextPage?: PageLink;
  prevPage?: PageLink;
}> = ({ prevPage, nextPage }) => (
  <nav className="flex justify-between md:justify-start gap-2 not-prose py-8">
    {prevPage ? (
      <LinkButton href={prevPage.link}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        {prevPage.label}
      </LinkButton>
    ) : (
      ""
    )}
    {nextPage ? (
      <LinkButton href={nextPage.link} highlighted>
        {nextPage.label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </LinkButton>
    ) : (
      ""
    )}
  </nav>
);

export default NavBar;
