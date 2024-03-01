import { Link } from "@remix-run/react";
import React from "react";
import Layout from "~/components/layout";
import ToggleMode from "~/components/toggle-mode";
import H2 from "~/components/ui/typography/h2";
import LoginForm, { TFormProps } from "./components/login-form";
import Quote from "./components/quote";
import { TData } from "./types";

const RouteContent: React.FC<
  TFormProps & {
    data: TData;
  }
> = ({ fields, errors, data }) => {
  return (
    <React.Fragment>
      <div className="grid md:grid-cols-2 h-screen">
        <Layout className="flex flex-col">
          <Layout.Header className="px-6 lg:px-10 xl:px-12 py-2 lg:py-4">
            <div className="flex-1 flex flex-row justify-between items-center">
              <Link to="/">
                <img alt="quotes" src="/quotes-q-logo.png" className="h-5" />
              </Link>
              <div className="flex flex-row items-center">
                <ToggleMode />
              </div>
            </div>
          </Layout.Header>
          <Layout.Body className="px-6 lg:px-10 xl:px-12 py-2 lg:py-4 flex-1 flex flex-col justify-center">
            <div className="flex-1 flex flex-col justify-center lg:w-[25vw]">
              <H2>Login</H2>
              <form method="post">
                <LoginForm fields={fields} errors={errors} />
              </form>
            </div>
          </Layout.Body>
        </Layout>
        <Layout className="hidden md:flex flex-col justify-center bg-muted text-muted-foreground p-6 lg:px-10 xl:px-12">
          <Layout.Body className="flex flex-col justify-center">
            <Quote quote={data} />
          </Layout.Body>
        </Layout>
      </div>
    </React.Fragment>
  );
};

export default RouteContent;
