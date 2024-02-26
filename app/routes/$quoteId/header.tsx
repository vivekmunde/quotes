import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Link } from "@remix-run/react";
import Page from "~/components/layout/quote";
import { Button } from "~/components/ui/button";

const Header: React.FC = () => {
  return (
    <Page.Header>
      <Link to="/search">
        <Button size="sm" variant="ghost">
          <MagnifyingGlassIcon className="h-4 w-4" />
        </Button>
      </Link>
    </Page.Header>
  );
};

export default Header;
