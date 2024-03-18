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
import { Textarea } from "~/components/ui/textarea";
import { TFormResponse, TMayBe } from "~/types";

const UploadQuotesForm: React.FC<
  TFormResponse<"quotes" | "otp"> & {
    uploading: boolean;
    cancelUrl?: TMayBe<string>;
    onCancel?: () => void;
  }
> = ({ fields, errors, uploading, cancelUrl, onCancel }) => {
  return (
    <Form>
      <FormItem>
        <FormLabel>Quotes JSON</FormLabel>
        <FormControl>
          <Textarea
            defaultValue={fields?.quotes?.toString() ?? ""}
            name="quotes"
            aria-invalid={Boolean(errors?.fields?.quotes)}
            aria-errormessage={
              errors?.fields?.quotes ? "quotes-error" : undefined
            }
            rows={12}
          />
        </FormControl>
        <If condition={!!errors?.fields?.quotes}>
          <If.True>
            <FormMessage>{errors?.fields?.quotes}</FormMessage>
          </If.True>
        </If>
      </FormItem>
      <FormItem className="mt-4 p-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded mb-6">
        <FormLabel>Please enter your OTP</FormLabel>
        <FormControl>
          <Input
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
      <FormFooter>
        <ButtonGroup>
          <Button type="submit" loading={uploading}>
            Upload
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
        <If condition={!uploading}>
          <If.True>
            <FormError error={errors?.message} />
          </If.True>
        </If>
      </FormFooter>
    </Form>
  );
};

export default UploadQuotesForm;
