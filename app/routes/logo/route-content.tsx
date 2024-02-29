import Page from "~/components/layout/page";
import Logo from "~/components/logo";

const RouteContent: React.FC = () => {
  return (
    <Page>
      <Page.Body className="flex items-center justify-center _bg-[rgba(102,102,102)]">
        <Logo />
      </Page.Body>
    </Page>
  );
};

export default RouteContent;
