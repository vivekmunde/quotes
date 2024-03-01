import { Link } from "@remix-run/react";
import React from "react";
import ToggleMode from "~/components/toggle-mode";

const Header: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ className, children, ...props }) => {
  return (
    <div
      className={`py-2 flex flex-row justify-between items-center ${
        className ?? ""
      }`}
      {...props}
    >
      <Link to="/">
        <img alt="quotes" src="/quotes-q-logo.png" className="h-5" />
      </Link>
      <div className="flex flex-row items-center">
        {children}
        <ToggleMode />
      </div>
    </div>
  );
};

export default Header;
