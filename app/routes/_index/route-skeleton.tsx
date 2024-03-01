import Layout from "~/components/layout";
import Logo from "~/components/logo";

const RouteSkeleton: React.FC = () => {
  return (
    <Layout.Screen>
      <Layout.Screen.Body className="flex items-center justify-center">
        <Logo />
      </Layout.Screen.Body>
    </Layout.Screen>
  );
};

export default RouteSkeleton;
