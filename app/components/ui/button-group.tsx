import * as React from "react";

const ButtonGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div className={`flex flex-row gap-2 ${className}`} ref={ref} {...props} />
  );
});

ButtonGroup.displayName = "ButtonGroup";

export default ButtonGroup;
