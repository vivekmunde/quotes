import React from "react";

const H3 = React.forwardRef<
  HTMLHeadingElement,
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
>(({ children, className, ...props }, ref) => {
  return (
    <h3
      className={`pb-3 scroll-m-20 text-2xl font-semibold tracking-tight ${
        className ?? ""
      }`}
      ref={ref}
      {...props}
    >
      {children}
    </h3>
  );
});
H3.displayName = "H3";

export default H3;
