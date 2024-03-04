import { AlertTriangle } from "lucide-react";
import React from "react";
import H1 from "~/components/ui/typography/h1";
import P from "~/components/ui/typography/p";

const RouteError: React.FC<{ title?: string; message?: string }> = ({
  title,
  message,
}) => {
  return (
    <section className="px-4 pt-[15vh] flex flex-col items-center text-center rounded text-red-500">
      <AlertTriangle className="h-[48px] w-[48px] mb-6" fontSize={48} />
      <H1 className="font-light" style={{ margin: 0 }}>
        {title ?? "Yeh! Sometimes, life sucks!"}
      </H1>
      <P style={{ margin: 0 }}>
        {message ?? "Some unexpected error occuurred!"}
      </P>
    </section>
  );
};

export default RouteError;
