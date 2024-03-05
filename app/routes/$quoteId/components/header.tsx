import { Link } from "@remix-run/react";
import { Search } from "lucide-react";
import Layout from "~/components/layout";
import { Button } from "~/components/ui/button";

const Header: React.FC = () => {
  return (
    <Layout.Screen.Header>
      <Link prefetch="render" to="/search">
        <Button size="sm" variant="ghost">
          <Search />
        </Button>
      </Link>
    </Layout.Screen.Header>
  );
};

export default Header;
