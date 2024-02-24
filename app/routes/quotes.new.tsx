import Title from "~/components/layout/title";
import { Button } from "~/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

export default function QuotesNewRoute() {
  return (
    <section>
      <header>
        <Title>Create new quote</Title>
      </header>
      <form className="space-y-6" method="post">
        <div>
          <FormItem>
            <FormLabel>Quote</FormLabel>
            <FormControl>
              <Input name="title" />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
          <FormItem>
            <FormLabel>Reference</FormLabel>
            <FormControl>
              <Textarea name="reference" />
            </FormControl>
            <FormDescription />
            <FormMessage />
          </FormItem>
        </div>
        <FormItem>
          <Button>Create</Button>
        </FormItem>
      </form>
    </section>
  );
}
