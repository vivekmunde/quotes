import Page from "~/components/layout/quote";
import Logo from "~/components/logo";

const RouteLoading: React.FC = () => {
  return (
    <Page>
      <Page.Body className="flex items-center justify-center">
        <Logo />
      </Page.Body>
    </Page>
  );
};

export default RouteLoading;
