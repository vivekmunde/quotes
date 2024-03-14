import If from "~/components/if";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormError,
  FormFooter,
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
      <FormFooter>
        <Button loading={submitting}>Login</Button>
        <If condition={submitting}>
          <If.False>
            <FormError error={errors?.message} />
          </If.False>
        </If>
      </FormFooter>
    </Form>
  );
};

export default LoginForm;
