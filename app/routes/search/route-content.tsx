import Layout from "~/components/layout";
import Empty from "./components/empty";
import SearchForm from "./components/search-form";

const RouteContent: React.FC = () => {
  return (
    <Layout.Screen.Body>
      <SearchForm />
      <Empty />
    </Layout.Screen.Body>
  );
};

export default RouteContent;
