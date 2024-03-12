export type TVariant = "default" | "box";

export type TContext = {
  variant?: TVariant;
  onSetVariant?: (variant: TVariant) => void;
};
