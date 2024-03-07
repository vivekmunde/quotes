import { AlertCircle } from "lucide-react";
import If from "~/components/if";
import { Alert, AlertTitle } from "~/components/ui/alert";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { TFormResponse } from "~/types";

const LoginForm: React.FC<
  TFormResponse<"loginId" | "password"> & { submitting: boolean }
> = ({ fields, errors, submitting }) => {
  return (
    <Form>
      <div>
        <FormItem>
          <FormControl>
            <Input
              defaultValue={fields?.loginId?.toString() ?? ""}
              name="loginId"
              placeholder="Login ID"
              aria-invalid={Boolean(errors?.fields?.loginId)}
              aria-errormessage={
                errors?.fields?.loginId ? "loginId-error" : undefined
              }
            />
          </FormControl>
          <FormDescription />
          <If condition={!!errors?.fields?.loginId}>
            <If.True>
              <FormMessage>{errors?.fields?.loginId}</FormMessage>
            </If.True>
          </If>
        </FormItem>
        <FormItem>
          <FormControl>
            <Input
              defaultValue={fields?.password?.toString() ?? ""}
              name="password"
              placeholder="Password"
              type="password"
              aria-invalid={Boolean(errors?.fields?.password)}
              aria-errormessage={
                errors?.fields?.password ? "password-error" : undefined
              }
            />
          </FormControl>
          <FormDescription />
          <If condition={!!errors?.fields?.password}>
            <If.True>
              <FormMessage>{errors?.fields?.password}</FormMessage>
            </If.True>
          </If>
        </FormItem>
      </div>
      <FormItem>
        <Button loading={submitting}>Login</Button>
      </FormItem>
      <If condition={submitting}>
        <If.False>
          <If condition={(errors?.message ?? "").length > 0}>
            <If.True>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>{errors?.message}</AlertTitle>
              </Alert>
            </If.True>
          </If>
        </If.False>
      </If>
    </Form>
  );
};

export default LoginForm;
