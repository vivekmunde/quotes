import React from "react";
import H2 from "~/components/ui/typography/h2";
import layoutStyles from "~/styles/layout";

const ScreenTitle: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <H2
      className={[layoutStyles.screen.title.base, className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </H2>
  );
};

export default ScreenTitle;
