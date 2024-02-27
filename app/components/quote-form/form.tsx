import If from "~/components/if";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

export type TFormProps = {
  fields?: {
    title: FormDataEntryValue | undefined | null;
    author?: FormDataEntryValue | undefined | null;
  };
  errors?: {
    fields?: { title?: string | undefined | null };
    form?: string | undefined | null;
  };
};

const QuoteForm: React.FC<TFormProps> = ({ fields, errors }) => {
  return (
    <Form className="space-y-6">
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
    </Form>
  );
};

export default QuoteForm;
