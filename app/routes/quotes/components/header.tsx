import { Form, Link } from "@remix-run/react";
import { LogOut, Plus, Quote } from "lucide-react";
import React from "react";
import Layout from "~/components/layout";
import { Button } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";

const Header: React.FC = () => {
  return (
    <Layout.AdminScreen.Header>
      <div className="flex flex-row">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link prefetch="render" to="/quotes/new">
                <Button size="sm" variant="ghost">
                  <Plus />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <div>Create New Quote</div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link prefetch="intent" to="/quotes">
                <Button size="sm" variant="ghost">
                  <Quote />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <div>Quotes</div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Form action="/auth/logout" method="post">
                <Button type="submit" size="sm" variant="ghost">
                  <LogOut />
                </Button>
              </Form>
            </TooltipTrigger>
            <TooltipContent>
              <div>Logout</div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>{" "}
      </div>
    </Layout.AdminScreen.Header>
  );
};

export default Header;
