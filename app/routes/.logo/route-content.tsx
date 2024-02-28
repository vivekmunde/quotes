import Page from "~/components/layout/page";
import Logo from "~/components/logo";

const RouteContent: React.FC = () => {
  return (
    <Page>
      <Page.Body className="flex items-center justify-center">
        <Logo />
      </Page.Body>
    </Page>
  );
};

export default RouteContent;
