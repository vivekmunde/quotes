import { Link } from "@remix-run/react";
import If from "~/components/if";
import { Button } from "~/components/ui/button";
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
import ButtonGroup from "../ui/button-group";

const QuoteForm: React.FC<
  TFormResponse<"author" | "title"> & {
    intent?: "create" | "update";
    submitting?: boolean;
    cancelUrl?: TMayBe<string>;
    onCancel?: () => void;
  }
> = ({ intent, fields, errors, submitting, cancelUrl, onCancel }) => {
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
        <FormError error={errors?.message} />
      </FormFooter>
    </Form>
  );
};

export default QuoteForm;
