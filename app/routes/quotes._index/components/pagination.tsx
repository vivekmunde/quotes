import { Form, useNavigation, useSearchParams } from "@remix-run/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

const Pagination: React.FC<{
  total: number;
  page: number;
  size: number;
}> = ({ total, page, size }) => {
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();
  const searchParamQuery = searchParams.get("q")?.toString() ?? "";
  const totalPages = Math.floor(total / size) + (total % size > 0 ? 1 : 0);
  const hasNext = page + 1 < totalPages;
  const hasPrevious = page > 0;

  const isPaginationIntent = navigation.formData?.get("intent") === "page";
  const navigatingToPage = Number(navigation.formData?.get("page") ?? -1);

  return (
    <div className="flex flex-row gap-1">
      <div className="p-2 bg-neutral-100 dark:bg-neutral-900 rounded text-sm flex flex-row items-center">
        {page * 1 * size + 1}
        {" - "}
        {Math.min(page * 1 * size + size, total)}
        {" of "}
        {total}
      </div>
      <div className="flex flex-row">
        <Form method="get" className="flex flex-row">
          <Input name="intent" value="page" type="hidden" />
          <Input
            name="page"
            value={hasPrevious ? page - 1 : page}
            type="hidden"
          />
          <Input name="size" value={size} type="hidden" />
          <Input name="q" value={searchParamQuery} type="hidden" />
          <Button
            type="submit"
            disabled={!hasPrevious}
            icon
            variant="outline"
            className="rounded-r-none"
            loading={isPaginationIntent && navigatingToPage === page - 1}
          >
            <ChevronLeft />
          </Button>
        </Form>
        <Form method="get" className="flex flex-row -ml-[1px]">
          <Input name="intent" value="page" type="hidden" />
          <Input name="page" value={hasNext ? page + 1 : page} type="hidden" />
          <Input name="size" value={size} type="hidden" />
          <Input name="q" value={searchParamQuery} type="hidden" />
          <Button
            type="submit"
            disabled={!hasNext}
            icon
            variant="outline"
            className="rounded-l-none"
            loading={isPaginationIntent && navigatingToPage === page + 1}
          >
            <ChevronRight />
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Pagination;
