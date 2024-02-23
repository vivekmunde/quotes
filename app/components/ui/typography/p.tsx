import React from "react";

const P = React.forwardRef<
  HTMLParagraphElement,
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
>(({ children, className, ...props }, ref) => {
  return (
    <h4
      className={`leading-7 [&:not(:first-child)]:mt-6 ${className ?? ""}`}
      ref={ref}
      {...props}
    >
      {children}
    </h4>
  );
});
P.displayName = "P";

export default P;
