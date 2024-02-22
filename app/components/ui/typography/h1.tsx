import React from "react";

const H1 = React.forwardRef<
  HTMLHeadingElement,
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
>(({ children, className, ...props }, ref) => {
  return (
    <h1
      className={`mb-6 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${
        className ?? ""
      }`}
      ref={ref}
      {...props}
    >
      {children}
    </h1>
  );
});
H1.displayName = "H1";

export default H1;
