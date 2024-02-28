import { isRouteErrorResponse, useRouteError } from "@remix-run/react";
import { AlertTriangle } from "lucide-react";
import React from "react";
import If from "~/components/if";
import H1 from "~/components/ui/typography/h1";
import P from "~/components/ui/typography/p";

const RouteError: React.FC<{ title?: string; message?: string }> = ({
  title,
  message,
}) => {
  const error: any = useRouteError();

  const _title =
    title ?? isRouteErrorResponse(error)
      ? [error?.status, error?.statusText].join(" ")
      : "Some error occurred!";

  const _message =
    message ?? isRouteErrorResponse(error) ? error?.data : error?.message;

  return (
    <section className="px-4 py-8 flex flex-col items-center text-center text-red-500">
      <AlertTriangle className="h-[48px] w-[48px] mb-4" fontSize={48} />
      <H1 className="font-light" style={{ margin: 0 }}>
        {_title}
      </H1>
      <If condition={(_message ?? "").length > 0}>
        <If.True>
          <P style={{ margin: 0 }}>{_message}</P>
        </If.True>
      </If>
    </section>
  );
};

export default RouteError;
