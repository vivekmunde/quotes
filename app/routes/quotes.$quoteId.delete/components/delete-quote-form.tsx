import { Link } from "@remix-run/react";
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
import { TFormResponse, TMayBe } from "~/types";

const DeleteQuoteForm: React.FC<
  TFormResponse<"quoteId" | "password" | "otp"> & {
    deleting: boolean;
    cancelUrl?: TMayBe<string>;
    onCancel?: () => void;
  }
> = ({ fields, errors, deleting, cancelUrl, onCancel }) => {
  return (
    <Form>
      <Input
        defaultValue={fields?.quoteId?.toString() ?? ""}
        name="quoteId"
        type="hidden"
      />
      <div className="p-2 bg-red-300/25 dark:bg-red-900/25 border border-red-300/30 dark:border-red-900/30 rounded mb-6">
        <FormItem>
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
          <FormLabel>Please enter your OTP</FormLabel>
          <FormControl>
            <Input
              className="border-red-300 dark:border-red-900"
              defaultValue={fields?.otp?.toString() ?? ""}
              name="otp"
              type="password"
              aria-invalid={Boolean(errors?.fields?.otp)}
              aria-errormessage={errors?.fields?.otp ? "otp-error" : undefined}
            />
          </FormControl>
          <If condition={!!errors?.fields?.otp}>
            <If.True>
              <FormMessage>{errors?.fields?.otp}</FormMessage>
            </If.True>
          </If>
        </FormItem>
      </div>
      <FormFooter>
        <ButtonGroup>
          <Button type="submit" variant="destructive" loading={deleting}>
            Yes! Delete
          </Button>
          <If condition={(cancelUrl ?? "").length > 0}>
            <If.True>
              <Link prefetch="intent" to={cancelUrl ?? "/"}>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </Link>
            </If.True>
            <If.False>
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
            </If.False>
          </If>
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
