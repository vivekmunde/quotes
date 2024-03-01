import { Await } from "@remix-run/react";
import { Suspense } from "react";
import Layout from "~/components/layout";
import H2 from "~/components/ui/typography/h2";
import { TMayBe } from "~/types";
import LoginForm, { TFormProps } from "./login-form";
import Quote from "./quote";

const RouteContent: React.FC<
  TFormProps & {
    quotePromise: Promise<{ title: string; author?: TMayBe<string> }>;
  }
> = ({ fields, errors, quotePromise }) => {
  return (
    <Layout.Screen.Body className="flex flex-col justify-center md:pb-[15vh]">
      <div className="mb-[10vh] md:mb-[5vh] flex flex-row border rounded">
        <div className="flex-1 flex flex-col justify-center px-6 py-12">
          <H2>Login</H2>
          <form method="post">
            <LoginForm fields={fields} errors={errors} />
          </form>
        </div>
        <div className="hidden md:block flex-1 lg:flex flex-col justify-center bg-muted text-muted-foreground p-6 rounded-tr rounded-br">
          <Suspense>
            <Await resolve={quotePromise}>
              {(quote) => <Quote quote={quote} />}
            </Await>
          </Suspense>
        </div>
      </div>
    </Layout.Screen.Body>
  );
};

export default RouteContent;
