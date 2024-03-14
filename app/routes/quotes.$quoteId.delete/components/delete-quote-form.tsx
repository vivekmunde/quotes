import If from "~/components/if";
import { Button } from "~/components/ui/button";
import ButtonGroup from "~/components/ui/button-group";
import {
  Form,
  FormControl,
  FormError,
  FormFooter,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { TFormResponse } from "~/types";

const DeleteQuoteForm: React.FC<
  TFormResponse<"quoteId" | "password"> & {
    deleting: boolean;
    onCancel?: () => void;
  }
> = ({ fields, errors, deleting, onCancel }) => {
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
      <FormFooter>
        <ButtonGroup>
          <Button type="submit" variant="destructive" loading={deleting}>
            Yes! Delete
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
        <If condition={!deleting}>
          <If.True>
            <FormError error={errors?.message} />
          </If.True>
        </If>
      </FormFooter>
    </Form>
  );
};

export default DeleteQuoteForm;
