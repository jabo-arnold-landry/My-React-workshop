import { cva } from "class-variance-authority";
import clsx from "clsx";
import { type InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface TypeOfInput extends InputHTMLAttributes<HTMLInputElement> {}

function Input({ className, ...props }: TypeOfInput) {
  return <input {...props} className={clsx(twMerge(inputVariants({className})))} />;
}

const inputVariants = cva("border border-2 border-red-400");
export default Input;
