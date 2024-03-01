import Layout from "~/components/layout";
import Logo from "~/components/logo";

const RouteContent: React.FC = () => {
  return (
    <Layout>
      <Layout.Body className="flex items-center justify-center _bg-[rgba(102,102,102)]">
        <Logo />
      </Layout.Body>
    </Layout>
  );
};

export default RouteContent;
