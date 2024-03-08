import { Form, useNavigation, useSearchParams } from "@remix-run/react";
import { Loader, X } from "lucide-react";
import { useState } from "react";
import If from "~/components/if";
import { Button } from "~/components/ui/button";
import { FormControl, FormItem } from "~/components/ui/form";
import { Input } from "~/components/ui/input";

const SearchForm: React.FC<{ size: number }> = ({ size }) => {
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();
  const searchParamQ = searchParams.get("q")?.toString() ?? "";
  const [value, setValue] = useState(searchParamQ);

  return (
    <div className="relative flex flex-row items-center">
      <Form className="flex-1" method="get">
        <Input name="intent" value="search" type="hidden" />
        <Input name="page" value="0" type="hidden" />
        <Input name="size" value={size} type="hidden" />
        <FormItem style={{ padding: 0 }}>
          <FormControl>
            <Input
              className="border-2 dark:border"
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
      <If
        condition={
          navigation.state === "loading" &&
          navigation.formData?.get("intent") === "search"
        }
      >
        <If.True>
          <div className="w-10 absolute right-0 flex flex-row justify-center">
            <Loader className="h-4 w-4 animate-spin" />
          </div>
        </If.True>
        <If.False>
          <If condition={searchParamQ.length > 0}>
            <If.True>
              <Form className="absolute right-0" method="get">
                <Input name="intent" value="search" type="hidden" />
                <Input name="q" value="" type="hidden" />
                <Input name="page" value="0" type="hidden" />
                <Input name="size" value={size} type="hidden" />
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
