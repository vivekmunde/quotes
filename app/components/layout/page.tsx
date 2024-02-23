import React from "react";

const Page: React.FC<
  { children: React.ReactNode } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({ children, className, ...props }) => {
  return (
    <div className={`flex flex-col h-screen ${className ?? ""}`} {...props}>
      {children}
    </div>
  );
};

export default Page;
