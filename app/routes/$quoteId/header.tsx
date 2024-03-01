import { Link } from "@remix-run/react";
import { Search } from "lucide-react";
import Layout from "~/components/layout";
import { Button } from "~/components/ui/button";

const Header: React.FC = () => {
  return (
    <Layout.Screen.Header>
      <Link to="/search">
        <Button size="sm" variant="ghost">
          <Search className="h-4 w-4" />
        </Button>
      </Link>
    </Layout.Screen.Header>
  );
};

export default Header;
