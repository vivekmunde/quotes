import { Form } from "@remix-run/react";
import { Loader, X } from "lucide-react";
import { useEffect, useState } from "react";
import If from "~/components/if";
import { Button } from "~/components/ui/button";
import { FormControl, FormItem } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Intent, Param } from "./search-param-hidden-inputs";
import useGetSearchParam from "./use-get-search-param";
import useIsIntent from "./use-is-intent";
import useIsLoading from "./use-is-loading";

const SearchForm: React.FC = () => {
  const isIntentSearch = useIsIntent()("q");
  const searchParamQuery = useGetSearchParam()("q");
  const [value, setValue] = useState(searchParamQuery);
  const isLoading = useIsLoading()();

  useEffect(() => {
    if (searchParamQuery !== value) {
      setValue(searchParamQuery);
    }
  }, [searchParamQuery]);

  return (
    <div className="relative flex flex-row items-center">
      <Form className="flex-1" method="get">
        <Intent intent="q" />
        <Param param="page" value="0" />
        <Param param="size" />
        <FormItem style={{ padding: 0 }}>
          <FormControl>
            <Input
              name="q"
              placeholder="Search quotes ..."
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </FormControl>
        </FormItem>
      </Form>
      <If condition={isLoading && isIntentSearch}>
        <If.True>
          <div className="w-10 absolute right-0 flex flex-row justify-center">
            <Loader className="h-4 w-4 animate-spin" />
          </div>
        </If.True>
        <If.False>
          <If condition={searchParamQuery.length > 0}>
            <If.True>
              <Form className="absolute right-0" method="get">
                <Intent intent="q" />
                <Param param="page" value="0" />
                <Param param="size" />
                <Button
                  className="rounded-l-none p-0 w-10"
                  icon
                  type="submit"
                  variant="outline"
                  onClick={() => {
                    setValue("");
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </Form>
            </If.True>
          </If>
        </If.False>
      </If>
    </div>
  );
};

export default SearchForm;
