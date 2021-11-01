import React from "react";

type ButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">; //* Restricting children as ReactNode like we can just only pass string as a children , not any <div></div> from parent component, Omit Excludes Children from ReactNode typing.

const Button = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`classes-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
