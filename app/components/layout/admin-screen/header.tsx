import { Link } from "@remix-run/react";
import React from "react";
import ToggleMode from "~/components/toggle-mode";
import LayoutHeader from "../header";

const Header: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ref, ...props }) => {
  return (
    <LayoutHeader
      ref={ref}
      className={`bg-white dark:bg-black md:rounded-b shadow-md px-4 md:px-5 py-2 mb-1 ${className}`}
      {...props}
    >
      <Link prefetch="render" to="/q/@next" className="py-2">
        <img alt="quotes" src="/quotes-q-logo.png" className="h-5" />
      </Link>
      <div className="flex flex-row items-center">
        <ToggleMode />
        {children}
      </div>
    </LayoutHeader>
  );
};

export default Header;
