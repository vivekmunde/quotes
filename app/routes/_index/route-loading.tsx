import Layout from "~/components/layout";
import Logo from "~/components/logo";

const RouteLoading: React.FC = () => {
  return (
    <Layout>
      <Layout.Body className="flex items-center justify-center">
        <Logo />
      </Layout.Body>
    </Layout>
  );
};

export default RouteLoading;
