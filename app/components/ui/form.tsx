import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
// import {
//   Controller,
//   ControllerProps,
//   FieldPath,
//   FieldValues,
//   FormProvider,
//   useFormContext,
// } from "react-hook-form"

import { Label } from "app/components/ui/label";
import { cn } from "app/lib/utils";
import { AlertCircle } from "lucide-react";
import { TMayBe } from "~/types";
import { Alert, AlertDescription, AlertTitle } from "./alert";

const Form = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  return <div ref={ref} {...props} />;
});

// type FormFieldContextValue<
//   TFieldValues extends FieldValues = FieldValues,
//   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
// > = {
//   name: TName
// }

// const FormFieldContext = React.createContext<FormFieldContextValue>(
//   {} as FormFieldContextValue
// )

// const FormField = <
//   TFieldValues extends FieldValues = FieldValues,
//   TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
// >({
//   ...props
// }: ControllerProps<TFieldValues, TName>) => {
//   return (
//     <FormFieldContext.Provider value={{ name: props.name }}>
//       <Controller {...props} />
//     </FormFieldContext.Provider>
//   )
// }

const useFormField = () => {
  // const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext);
  // const { getFieldState, formState } = useFormContext()

  // const fieldState = getFieldState(fieldContext.name, formState)

  // if (!fieldContext) {
  //   throw new Error("useFormField should be used within <FormField>")
  // }

  const { id } = itemContext;

  return {
    id,
    // name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    // ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn("space-y-2 pb-4", className)} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & {
    error?: boolean;
  }
>(({ className, error, ...props }, ref) => {
  // const { error, formItemId } = useFormField();
  const { formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot> & { error?: boolean }
>(({ error, ...props }, ref) => {
  // const { error, formItemId, formDescriptionId, formMessageId } =
  //   useFormField();
  const { formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & { error?: { message?: string } }
>(({ className, children, error, ...props }, ref) => {
  // const { error, formMessageId } = useFormField();
  const { formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

const FormFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("pt-2 pb-4", className)} {...props} />;
});
FormFooter.displayName = "FormFooter";

const FormError: React.FC<{ error?: TMayBe<string> }> = ({ error }) => {
  return (error ?? "").length > 0 ? (
    <div className="pt-4">
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    </div>
  ) : null;
};
FormFooter.displayName = "FormError";

export {
  Form,
  FormControl,
  FormDescription,
  FormError,
  FormFooter,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
};
