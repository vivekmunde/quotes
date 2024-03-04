import React from "react";
import H1 from "~/components/ui/typography/h1";
import P from "~/components/ui/typography/p";

const RouteError404: React.FC<{ message: string; title: string }> = ({
  message,
  title,
}) => {
  return (
    <section className="px-4 pt-[15vh] flex flex-col items-center text-center">
      <div className="font-extrabold text-2xl mb-6 p-2 rounded bg-neutral-300 dark:bg-neutral-600">
        4 Ohhh... 4
      </div>
      <H1 className="font-light" style={{ margin: 0 }}>
        {title ?? "Not found!"}
      </H1>
      <P style={{ margin: 0 }} className="text-destructive">
        {message}
      </P>
    </section>
  );
};

export default RouteError404;
