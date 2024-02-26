import React from "react";

const P = React.forwardRef<
  HTMLParagraphElement,
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
>(({ children, className, ...props }, ref) => {
  return (
    <p
      className={`leading-7 [&:not(:first-child)]:mt-6 ${className ?? ""}`}
      ref={ref}
      {...props}
    >
      {children}
    </p>
  );
});
P.displayName = "P";

export default P;
