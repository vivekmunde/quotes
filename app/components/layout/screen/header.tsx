import { Link } from "@remix-run/react";
import React from "react";
import ToggleMode from "~/components/toggle-mode";
import LayoutHeader from "../header";

const Header: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, ref, ...props }) => {
  return (
    <LayoutHeader ref={ref} {...props}>
      <Link to="/">
        <img alt="quotes" src="/quotes-q-logo.png" className="h-5" />
      </Link>
      <div className="flex flex-row items-center">
        {children}
        <ToggleMode />
      </div>
    </LayoutHeader>
  );
};

export default Header;
