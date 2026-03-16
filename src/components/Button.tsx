import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export interface BtnProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

function Button({ children, className, variant, size, ...props }: BtnProps) {
  return (
    <button {...props} className={clsx(twMerge(buttonVariants({variant, size, className})))}>
      {children}
    </button>
  );
}

const buttonVariants = cva("rounded-md", {
  variants: {
    variant: {
      primary: "bg-blue-500 border border-black text-white",
      secondary: "bg-green-500 border border-2 text-white",
      danger: "bg-red-500 border text-white",
    },
    size: {
      sm: "text-sm px-1 py-0",
      md: "text-base px-2 py-px",
      lg: "text-xl px-4 py-2",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
export default Button;
