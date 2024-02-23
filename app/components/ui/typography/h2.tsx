import React from "react";

const H2 = React.forwardRef<
  HTMLHeadingElement,
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
>(({ children, className, ...props }, ref) => {
  return (
    <h2
      className={`pb-5 scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 ${
        className ?? ""
      }`}
      ref={ref}
      {...props}
    >
      {children}
    </h2>
  );
});
H2.displayName = "H2";

export default H2;
