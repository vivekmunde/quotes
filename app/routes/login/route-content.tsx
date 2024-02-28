import Page from "~/components/layout/page";
import H2 from "~/components/ui/typography/h2";
import LoginForm from "./login-form";
import Quote from "./quote";

const RouteContent: React.FC<{
  quote: { title: string; author?: string | undefined | null };
}> = ({ quote }) => {
  return (
    <Page>
      <Page.Header />
      <Page.Body className="flex flex-col justify-center md:pb-[15vh]">
        <div className="mb-[10vh] md:mb-[5vh] flex flex-row border rounded">
          <div className="flex-1 flex flex-col justify-center px-6 py-12">
            <H2>Login</H2>
            <LoginForm />
          </div>
          <div className="hidden md:block flex-1 lg:flex flex-col justify-center bg-muted text-muted-foreground p-6 rounded-tr rounded-br">
            <Quote quote={quote} />
          </div>
        </div>
      </Page.Body>
    </Page>
  );
};

export default RouteContent;
