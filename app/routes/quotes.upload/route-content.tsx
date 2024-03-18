import { useFetcher, useNavigate, useSearchParams } from "@remix-run/react";
import Layout from "~/components/layout";
import layoutStyles from "~/styles/layout";
import { TFormResponse } from "~/types";
import UploadQuotesForm from "./components/upload-quotes-form";

const RouteContent: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const fetcher = useFetcher<TFormResponse<"quotes" | "otp">>();
  const fields = {
    quotes: fetcher.formData?.get("quotes"),
    otp: fetcher.formData?.get("otp"),
  };
  const errors = fetcher.data?.errors;

  return (
    <div className={layoutStyles.container.wrapper}>
      <div
        className={[
          layoutStyles.container.content,
          layoutStyles.body.base,
        ].join(" ")}
      >
        <section>
          <header className={layoutStyles.screen.header.base}>
            <Layout.Screen.Title className={layoutStyles.screen.title.base}>
              Upload Quotes
            </Layout.Screen.Title>
          </header>
          <div>
            <fetcher.Form method="post">
              <UploadQuotesForm
                fields={fields}
                errors={errors}
                cancelUrl={searchParams.get("backTo")}
                onCancel={() => {
                  navigate(-1);
                }}
                uploading={fetcher.state === "submitting"}
              />
            </fetcher.Form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RouteContent;
