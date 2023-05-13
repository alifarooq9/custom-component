import { cn } from "@/utils/classNames";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentPropsWithRef, forwardRef } from "react";

const inputVariants = cva("rounded-lg focus-default text-sm ", {
	variants: {
		variant: {
			default:
				"py-2 px-4 bg-transparent border border-default text-background dark:text-slate-50",
			small: "px-2 py-1 text-xs bg-transparent border border-default text-background dark:text-slate-50",
			medium: "px-4 py-2 bg-transparent border border-default text-background dark:text-slate-50",
			large: "px-5 py-3 bg-transparent border border-default text-background dark:text-slate-50",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

interface InputProps
	extends ComponentPropsWithRef<"input">,
		VariantProps<typeof inputVariants> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ variant, className, ...props }, ref) => {
		return (
			<input
				className={cn(inputVariants({ variant, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);

Input.displayName = "Input";

export default Input;
