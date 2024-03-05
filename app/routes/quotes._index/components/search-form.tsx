import { Form } from "@remix-run/react";
import { FormControl, FormItem } from "~/components/ui/form";
import { Input } from "~/components/ui/input";

const SearchForm: React.FC = () => {
  return (
    <Form method="post">
      <div>
        <FormItem style={{ padding: 0 }}>
          <FormControl>
            <Input
              className="border-2 dark:border"
              name="query"
              placeholder="Search quotes ..."
            />
          </FormControl>
        </FormItem>
      </div>
    </Form>
  );
};

export default SearchForm;
