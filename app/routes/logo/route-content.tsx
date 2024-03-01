import Layout from "~/components/layout";
import Logo from "~/components/logo";

const RouteContent: React.FC = () => {
  return (
    <Layout.Screen>
      <Layout.Screen.Body className="flex items-center justify-center _bg-[rgba(102,102,102)]">
        <Logo />
      </Layout.Screen.Body>
    </Layout.Screen>
  );
};

export default RouteContent;
