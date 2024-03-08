import { Slot } from "@radix-ui/react-slot";
import { cn } from "app/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader } from "lucide-react";
import * as React from "react";
import If from "~/components/if";

const buttonVariants = cva(
  "q-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "q-sm h-9 rounded-md px-3",
        lg: "q-lg h-11 rounded-md px-8",
      },
      icon: { true: "q-icon w-10 px-0" },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      icon,
      asChild = false,
      children,
      loading,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, icon, className }))}
        ref={ref}
        {...props}
      >
        <If condition={!!icon && !!loading}>
          <If.False>{children}</If.False>
        </If>
        <If condition={!!loading}>
          <If.True>
            <span className={icon ? "" : "ml-2"}>
              <Loader className="h-3 w-3 animate-spin" />
            </span>
          </If.True>
        </If>
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
