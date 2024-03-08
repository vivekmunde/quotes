import { Form } from "@remix-run/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";
import getPagination from "../../../utils/get-pagination";
import { Intent, Param } from "./search-param-hidden-inputs";
import useIsIntent from "./use-is-intent";
import useNavigatingToPage from "./use-navigating-to-page";

const Pagination: React.FC<{
  total: number;
  page: number;
  size: number;
}> = ({ total, page, size }) => {
  const isIntentPagination = useIsIntent()("page");
  const isNavigatingToPage = useNavigatingToPage();
  const pagination = getPagination({ page, size, total });

  return pagination.end > 0 ? (
    <div className="flex flex-row gap-1">
      <div className="p-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded text-sm flex flex-row items-center">
        {pagination.start}
        {" - "}
        {pagination.end}
        {" of "}
        {total}
      </div>
      <div className="flex flex-row border rounded">
        <Form method="get" className="flex flex-row border-r">
          <Intent intent="page" />
          <Param param="q" />
          <Param param="size" />
          <Param
            param="page"
            value={
              pagination.hasPrevious ? pagination.page - 1 : pagination.page
            }
          />
          <Button
            type="submit"
            disabled={!pagination.hasPrevious}
            icon
            variant="ghost"
            className="rounded-r-none"
            loading={isIntentPagination && isNavigatingToPage(page - 1)}
          >
            <ChevronLeft />
          </Button>
        </Form>
        <Form method="get" className="flex flex-row">
          <Intent intent="page" />
          <Param param="q" />
          <Param param="size" />
          <Param
            param="page"
            value={pagination.hasNext ? pagination.page + 1 : pagination.page}
          />
          <Button
            type="submit"
            disabled={!pagination.hasNext}
            icon
            variant="ghost"
            className="rounded-l-none"
            loading={isIntentPagination && isNavigatingToPage(page + 1)}
          >
            <ChevronRight />
          </Button>
        </Form>
      </div>
    </div>
  ) : null;
};

export default Pagination;
