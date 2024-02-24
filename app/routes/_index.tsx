import type { MetaFunction } from "@remix-run/node";
import Body from "~/components/layout/body";
import Footer from "~/components/layout/footer";
import Header from "~/components/layout/header";
import Page from "~/components/layout/page";
import H1 from "~/components/ui/typography/h1";

export const meta: MetaFunction = () => {
  return [
    { title: "Quotes" },
    { name: "Quotes", content: "Welcome to Quotes!" },
  ];
};

export default function IndexRoute() {
  return (
    <Page>
      <Header />
      <Body>
        <section className="md:pt-[15vh] lg:pt-[20vh]">
          <header>
            <H1>The only thing we have to fear is fear itself!</H1>
            <div className="text-neutral-500">- Franklin D. Roosevelt's</div>
          </header>
        </section>
      </Body>
      <Footer>
        <small className="text-neutral-500">Enjoy!</small>
      </Footer>
    </Page>
  );
}
