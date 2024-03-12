import React, { useCallback, useState } from "react";
import Title from "../title";
import Body from "./body";
import Context from "./context";
import Footer from "./footer";
import Header from "./header";
import { TVariant } from "./types";

const Screen: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & { variant?: "default" | "box" }
> & {
  Header: typeof Header;
  Body: typeof Body;
  Footer: typeof Footer;
  Title: typeof Title;
} = ({ children, className, variant, ...props }) => {
  const [state, setState] = useState<{ variant: TVariant }>({
    variant: variant ?? "default",
  });

  const onSetVariant = useCallback(
    (variant: TVariant) => {
      setState({ variant });
    },
    [state]
  );

  return (
    <Context.Provider value={{ variant: state.variant, onSetVariant }}>
      <div
        className={[
          "grid grid-flow-col grid-cols-[repeat(24,1fr)]",
          state.variant === "box"
            ? "md:bg-neutral-100 md:dark:bg-neutral-900 md:px-4"
            : "px-4",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        <div className="flex flex-col min-h-screen col-[span_24] md:col-[3_/_span_20] lg:col-[4_/_span_18] xl:col-[5_/_span_16]">
          {children}
        </div>
      </div>
    </Context.Provider>
  );
};

Screen.Header = Header;
Screen.Body = Body;
Screen.Footer = Footer;
Screen.Title = Title;

export default Screen;
