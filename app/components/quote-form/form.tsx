import { AlertCircle } from "lucide-react";
import If from "~/components/if";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormFooter,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { TFormResponse } from "~/types";
import ButtonGroup from "../ui/button-group";

const QuoteForm: React.FC<
  TFormResponse<"author" | "title"> & {
    intent?: "create" | "update";
    submitting?: boolean;
    onCancel?: () => void;
  }
> = ({ intent, fields, errors, submitting, onCancel }) => {
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
      <FormFooter>
        <ButtonGroup>
          <Button type="submit" loading={submitting}>
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
            type="button"
            variant="outline"
            onClick={() => {
              if (onCancel) {
                onCancel();
              }
            }}
          >
            Cancel
          </Button>
        </ButtonGroup>
      </FormFooter>
      <If condition={(errors?.message ?? "").length > 0}>
        <If.True>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{errors?.message}</AlertDescription>
          </Alert>
        </If.True>
      </If>
    </Form>
  );
};

export default QuoteForm;
