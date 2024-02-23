import React from "react";

const H5 = React.forwardRef<
  HTMLHeadingElement,
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
>(({ children, className, ...props }, ref) => {
  return (
    <h5
      className={`pb-1 scroll-m-20 text-lg font-semibold tracking-tight ${
        className ?? ""
      }`}
      ref={ref}
      {...props}
    >
      {children}
    </h5>
  );
});
H5.displayName = "H5";

export default H5;
