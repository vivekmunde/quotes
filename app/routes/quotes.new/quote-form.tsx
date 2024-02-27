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

const QuoteForm: React.FC<{
  fields?: {
    title: FormDataEntryValue | undefined | null;
    author?: FormDataEntryValue | undefined | null;
  };
  errors?: {
    fields?: { title?: string | undefined | null };
    form?: string | undefined | null;
  };
}> = ({ fields, errors }) => {
  return (
    <form className="space-y-6" method="post">
      <div>
        <FormItem>
          <FormLabel>Quote</FormLabel>
          <FormControl>
            <Textarea
              defaultValue={fields?.title?.toString() ?? ""}
              name="title"
              aria-invalid={Boolean(errors?.fields?.title)}
              aria-errormessage={
                errors?.fields?.title ? "title-error" : undefined
              }
            />
          </FormControl>
          <FormDescription />
          <If condition={!!errors?.fields?.title}>
            <If.True>
              <FormMessage>{errors?.fields?.title}</FormMessage>
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
      <If condition={!!errors?.form}>
        <If.True>
          <FormItem>
            <FormMessage>{errors?.form}</FormMessage>
          </FormItem>
        </If.True>
      </If>
    </form>
  );
};

export default QuoteForm;
