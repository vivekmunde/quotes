import If from "~/components/if";
import Page from "~/components/layout/page";
import H2 from "~/components/ui/typography/h2";
import LoginForm from "./login-form";

const RouteContent: React.FC<{
  quote: { title: string; author?: string | undefined | null };
}> = ({ quote }) => {
  return (
    <Page>
      <Page.Header />
      <Page.Body className="flex flex-col justify-center md:pb-[15vh]">
        <div className="my-6 flex flex-row border rounded">
          <div className="flex-1 flex flex-col justify-center px-6 py-12">
            <H2>Login</H2>
            <LoginForm />
          </div>
          <div className="sm:hidden flex-1 lg:flex flex-col justify-center bg-muted p-6 rounded-tr rounded-br">
            <section>
              <header>
                <H2>{quote.title}</H2>
                <If condition={(quote.author ?? "").length > 0}>
                  <If.True>
                    <div className="text-neutral-500 dark:text-neutral-400">
                      - {quote.author}
                    </div>
                  </If.True>
                </If>
              </header>
            </section>
          </div>
        </div>
      </Page.Body>
    </Page>
  );
};

export default RouteContent;
