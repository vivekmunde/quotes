import { FormControl, FormItem } from "~/components/ui/form";
import { Input } from "~/components/ui/input";

const SearchForm: React.FC = () => {
  return (
    <form method="post">
      <div>
        <FormItem>
          <FormControl>
            <Input
              className="border-2"
              name="query"
              placeholder="Search quotes ..."
            />
          </FormControl>
        </FormItem>
      </div>
    </form>
  );
};

export default SearchForm;
