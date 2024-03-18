import { Link, useLocation } from "@remix-run/react";
import { ListPlus, Plus, UploadCloud } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

const CreateQuote: React.FC = () => {
  const location = useLocation();
  const backToUrl = encodeURIComponent(
    [location.pathname, location.search, location.hash].join("")
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="ghost">
          <Plus />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <Link prefetch="render" to={`/quotes/create?backTo=${backToUrl}`}>
            <DropdownMenuItem>
              <ListPlus className="mr-3 h-4 w-4" />
              <span>Create Quote</span>
            </DropdownMenuItem>
          </Link>
          <Link prefetch="render" to={`/quotes/upload?backTo=${backToUrl}`}>
            <DropdownMenuItem>
              <UploadCloud className="mr-3 h-4 w-4" />
              <span>Upload Quotes</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CreateQuote;
