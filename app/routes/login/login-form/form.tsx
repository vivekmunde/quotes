import If from "~/components/if";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

export type TFormProps = {
  fields?: {
    loginId: FormDataEntryValue | undefined | null;
    password?: FormDataEntryValue | undefined | null;
  };
  errors?: {
    fields?: {
      loginId?: string | undefined | null;
      password?: string | undefined | null;
    };
    form?: string | undefined | null;
  };
};

const LoginForm: React.FC<TFormProps> = ({ fields, errors }) => {
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
        <Button>Login</Button>
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

export default LoginForm;
