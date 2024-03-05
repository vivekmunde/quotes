import { AlertCircle } from "lucide-react";
import If from "~/components/if";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { TFormResponse } from "~/types";

const DeleteQuoteForm: React.FC<
  TFormResponse<"quoteId" | "password"> & {
    onCancel?: () => void;
  }
> = ({ fields, errors, onCancel }) => {
  return (
    <Form>
      <Input
        defaultValue={fields?.quoteId?.toString() ?? ""}
        name="quoteId"
        type="hidden"
      />
      <FormItem className="p-2 bg-red-300/25 dark:bg-red-900/25 border border-red-300/30 dark:border-red-900/30 rounded mb-6">
        <FormLabel>Please enter your password</FormLabel>
        <FormControl>
          <Input
            className="border-red-300 dark:border-red-900"
            defaultValue={fields?.password?.toString() ?? ""}
            name="password"
            type="password"
            aria-invalid={Boolean(errors?.fields?.password)}
            aria-errormessage={
              errors?.fields?.password ? "password-error" : undefined
            }
          />
        </FormControl>
        <If condition={!!errors?.fields?.password}>
          <If.True>
            <FormMessage>{errors?.fields?.password}</FormMessage>
          </If.True>
        </If>
      </FormItem>
      <FormItem>
        <div className="flex flex-row gap-2">
          <Button variant="destructive">Yes! Delete</Button>
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

export default DeleteQuoteForm;
