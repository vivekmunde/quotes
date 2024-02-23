import React from "react";
import Container from "./container";

const Footer: React.FC<
  { children: React.ReactNode } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({ children, className, ...props }) => {
  return (
    <div className={`py-2 ${className ?? ""}`} {...props}>
      <Container>{children}</Container>
    </div>
  );
};

export default Footer;
