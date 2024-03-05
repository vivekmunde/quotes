import React from "react";
import If from "~/components/if";
import H1 from "~/components/ui/typography/h1";
import P from "~/components/ui/typography/p";
import { TMayBe } from "~/types";

const RouteError404: React.FC<{
  message?: TMayBe<string>;
  title?: TMayBe<string>;
}> = ({ message, title }) => {
  return (
    <section className="px-4 pt-[15vh] flex flex-col items-center text-center">
      <div className="font-extrabold text-2xl mb-6 px-4 py-2 rounded bg-neutral-300 dark:bg-neutral-600">
        4 Ohhh... 4
      </div>
      <H1 className="font-light" style={{ margin: 0 }}>
        {title ?? "Yeh! Life is not fair!"}
      </H1>
      <If condition={(message ?? "").length > 0}>
        <If.True>
          <P style={{ margin: 0 }} className="text-destructive">
            {message}
          </P>
        </If.True>
      </If>
    </section>
  );
};

export default RouteError404;
