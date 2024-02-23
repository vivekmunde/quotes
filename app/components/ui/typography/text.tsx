import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "app/lib/utils";

const textVariants = cva("", {
  variants: {
    variant: {
      default: "",
      secondary: "text-secondary-foreground",
    },
    size: {
      default: "",
      sm: "text-lg font-semibold",
      lg: "text-sm font-medium leading-none",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export const getClassName = ({
  variant,
  size,
}: VariantProps<typeof textVariants>) => {
  cn(textVariants({ variant, size }));
};
