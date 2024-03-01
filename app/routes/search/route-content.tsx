import Layout from "~/components/layout";
import SearchForm from "./search-form";

const RouteContent: React.FC = () => {
  return (
    <Layout.Screen.Body>
      <SearchForm />
    </Layout.Screen.Body>
  );
};

export default RouteContent;
