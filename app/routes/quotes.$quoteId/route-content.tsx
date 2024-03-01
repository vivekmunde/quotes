import { Link } from "@remix-run/react";
import { ChevronLeft, EditIcon, TrashIcon } from "lucide-react";
import React from "react";
import Layout from "~/components/layout";
import Quote from "~/components/quote";
import { Button } from "~/components/ui/button";
import { TData } from "./types";

const RouteContent: React.FC<{
  data: TData;
}> = ({ data }) => {
  const { quote } = data;

  return (
    <React.Fragment>
      <Layout.Screen.Body className="flex flex-col justify-center">
        <div className="md:mb-[5vh]">
          <Quote author={quote.author} title={quote.title} />
        </div>
      </Layout.Screen.Body>
      <Layout.Screen.Footer>
        <div className="flex flex-row justify-between">
          <Link to="/quotes">
            <Button size="icon" variant="outline">
              <ChevronLeft />
            </Button>
          </Link>
          <div className="flex flex-row justify-end gap-2">
            <Button size="icon">
              <EditIcon />
            </Button>
            <Button variant="destructive" size="icon">
              <TrashIcon />
            </Button>
          </div>
        </div>
      </Layout.Screen.Footer>
    </React.Fragment>
  );
};

export default RouteContent;
