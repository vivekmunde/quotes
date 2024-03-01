import React from "react";

const Footer: React.FC<
  { children: React.ReactNode } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({ children, className, ...props }) => {
  return (
    <div className={`py-2 ${className ?? ""}`} {...props}>
      {children}
    </div>
  );
};

export default Footer;
