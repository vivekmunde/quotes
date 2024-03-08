const getPagination = ({
  page,
  size,
  total,
}: {
  page: number;
  size: number;
  total: number;
}) => {
  const start = Math.min(
    Math.floor(total / size) * size + 1,
    page * 1 * size + 1
  );
  const end = Math.min(page * 1 * size + size, total);
  const pages = Math.floor(total / size) + (total % size > 0 ? 1 : 0);

  const pageNumber = page >= pages ? pages - 1 : page;

  const hasNext = pageNumber + 1 < pages;
  const hasPrevious = pageNumber > 0;

  return {
    start,
    end,
    pages,
    hasNext,
    hasPrevious,
    page: pageNumber,
    size,
    total,
  };
};

export default getPagination;
