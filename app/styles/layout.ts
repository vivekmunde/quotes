const layoutClassNames = {
  base: "min-h-screen grid grid-rows-[min-content_1fr_min-content]",
  fixedHeader: "pt-14 grid-rows-[1fr_min-content]",
};

const layoutContainer = {
  wrapper: "grid grid-cols-[repeat(24,1fr)]",
  content:
    "col-[span_24] md:col-[3_/_span_20] lg:col-[4_/_span_18] xl:col-[5_/_span_16]",
};

const layoutHeader = {
  base: "px-4 py-2",
  background: "bg-neutral-50 dark:bg-neutral-950",
  border: "border-b border-neutral-200 dark:border-neutral-800",
  fixed: "fixed bg-background z-10 h-14 top-0 left-0 right-0",
};

const layoutBody = { base: "p-4" };

const layoutFooter = {
  base: "px-4 py-2",
  border: "border-b border-neutral-200 dark:border-neutral-800",
};

const screenHeader = {
  base: "pt-2 pb-6",
};

const screenTitle = { base: "mt-0 mb-0 pb-0 pb-0" };

const layout = {
  layout: layoutClassNames,
  container: layoutContainer,
  header: layoutHeader,
  body: layoutBody,
  footer: layoutFooter,
  screen: {
    header: screenHeader,
    title: screenTitle,
  },
};

export default layout;
