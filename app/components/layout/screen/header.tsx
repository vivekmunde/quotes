import { Link } from "@remix-run/react";
import React from "react";
import If from "~/components/if";
import ToggleMode from "~/components/toggle-mode";
import LayoutHeader from "../header";

const Header: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, ref, ...props }) => {
  return (
    <LayoutHeader ref={ref} {...props}>
      <Link to="/q/@next">
        <img alt="quotes" src="/quotes-q-logo.png" className="h-5" />
      </Link>
      <div className="flex flex-row items-center">
        <If condition={process.env.NODE_ENV === "development"}>
          <If.True>
            <ToggleMode />
          </If.True>
        </If>
        {children}
      </div>
    </LayoutHeader>
  );
};

export default Header;
