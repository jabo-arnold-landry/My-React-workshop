import { type FormHTMLAttributes, type ReactNode } from "react";

interface FormElement extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

function Form({ children, ...props }: FormElement) {
  return <form {...props}>{children}</form>;
}

export default Form;
