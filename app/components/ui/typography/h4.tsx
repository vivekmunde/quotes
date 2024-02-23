import React from "react";

const H4 = React.forwardRef<
  HTMLHeadingElement,
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
>(({ children, className, ...props }, ref) => {
  return (
    <h4
      className={`pb-2 scroll-m-20 text-xl font-semibold tracking-tight ${
        className ?? ""
      }`}
      ref={ref}
      {...props}
    >
      {children}
    </h4>
  );
});
H4.displayName = "H4";

export default H4;
