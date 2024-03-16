import { Link } from "@remix-run/react";
import React from "react";
import ToggleMode from "~/components/toggle-mode";
import layoutStyles from "~/styles/layout";

const LayoutHeader: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...props }) => {
  return (
    <div
      className={[
        layoutStyles.header.base,
        "flex flex-row justify-between items-center",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      <Link prefetch="render" to="/q/@next" className="py-2">
        <img alt="quotes" src="/quotes-q-logo.png" className="h-5" />
      </Link>
      <div className="flex flex-row items-center">
        <ToggleMode />
        {children}
      </div>
    </div>
  );
};

export default LayoutHeader;
