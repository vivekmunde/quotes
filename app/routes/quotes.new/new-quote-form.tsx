import If from "~/components/if";
import { Button } from "~/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

const NewQuoteForm: React.FC<{
  fields?: {
    title: string | undefined | null;
    author?: string | undefined | null;
  };
  fieldErrors?: { title: string | undefined | null };
  formError?: string | undefined | null;
}> = ({ fields, fieldErrors, formError }) => {
  return (
    <form className="space-y-6" method="post">
      <div>
        <FormItem>
          <FormLabel>Quote</FormLabel>
          <FormControl>
            <Textarea
              defaultValue={fields?.title?.toString() ?? ""}
              name="title"
              aria-invalid={Boolean(fieldErrors?.title)}
              aria-errormessage={fieldErrors?.title ? "title-error" : undefined}
            />
          </FormControl>
          <FormDescription />
          <If condition={!!fieldErrors?.title}>
            <If.True>
              <FormMessage>{fieldErrors?.title}</FormMessage>
            </If.True>
          </If>
        </FormItem>
        <FormItem>
          <FormLabel>Author</FormLabel>
          <FormControl>
            <Input
              defaultValue={fields?.author?.toString() ?? ""}
              name="author"
            />
          </FormControl>
          <FormDescription />
          <FormMessage />
        </FormItem>
      </div>
      <FormItem>
        <Button>Create</Button>
      </FormItem>
      <If condition={!!formError}>
        <If.True>
          <FormItem>
            <FormMessage>{formError}</FormMessage>
          </FormItem>
        </If.True>
      </If>
    </form>
  );
};

export default NewQuoteForm;
