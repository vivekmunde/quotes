import { Link } from "@remix-run/react";
import { Search } from "lucide-react";
import Page from "~/components/layout/quote";
import { Button } from "~/components/ui/button";

const Header: React.FC = () => {
  return (
    <Page.Header>
      <Link to="/search">
        <Button size="sm" variant="ghost">
          <Search className="h-4 w-4" />
        </Button>
      </Link>
    </Page.Header>
  );
};

export default Header;
