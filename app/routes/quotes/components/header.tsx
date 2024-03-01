import { Link } from "@remix-run/react";
import { LogOut, Plus, Quote } from "lucide-react";
import React from "react";
import Layout from "~/components/layout";
import { Button } from "~/components/ui/button";

const Header: React.FC = () => {
  return (
    <Layout.Screen.Header>
      <div className="flex flex-row">
        <Link to="/quotes/new">
          <Button size="sm" variant="ghost">
            <Plus />
          </Button>
        </Link>
        <Link to="/quotes">
          <Button size="sm" variant="ghost">
            <Quote />
          </Button>
        </Link>
        <Link to="/auth/logout">
          <Button size="sm" variant="ghost">
            <LogOut />
          </Button>
        </Link>
      </div>
    </Layout.Screen.Header>
  );
};

export default Header;
