import If from "~/components/if";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { TFormResponse } from "~/types";

const QuoteForm: React.FC<
  TFormResponse<"author" | "title"> & {
    intent?: "create" | "update";
    onCancel?: () => void;
  }
> = ({ intent, fields, errors, onCancel }) => {
  return (
    <Form>
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
      </FormItem>
      <FormItem>
        <div className="flex flex-row gap-2">
          <Button>
            <If condition={intent === "create"}>
              <If.True>Create</If.True>
              <If.False>
                <If condition={intent === "update"}>
                  <If.True>Update</If.True>
                  <If.False>Save</If.False>
                </If>
              </If.False>
            </If>
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              if (onCancel) {
                onCancel();
              }
            }}
          >
            Cancel
          </Button>
        </div>
      </FormItem>
      <If condition={!!errors?.message}>
        <If.True>
          <FormItem>
            <FormMessage>{errors?.message}</FormMessage>
          </FormItem>
        </If.True>
      </If>
    </Form>
  );
};

export default QuoteForm;
