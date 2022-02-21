import Link from "next/link";

const Button: React.FC<{ highlighted?: boolean }> = ({
  highlighted,
  children,
}) => (
  <div
    className={[
      "p-4 py-2 rounded-lg",
      highlighted
        ? "bg-black text-white dark:bg-white dark:text-gray-900"
        : "text-gray-900 bg-gray-200 dark:bg-gray-800 dark:text-gray-100",
      "flex gap-2 items-center",
    ].join(" ")}
  >
    {children}
  </div>
);

export const LinkButton: React.FC<{ href: string; highlighted?: boolean }> = ({
  children,
  href,
  highlighted,
}) => (
  <Link href={href}>
    <a>
      <Button highlighted={highlighted}>{children}</Button>
    </a>
  </Link>
);

export default Button;
