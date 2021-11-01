import React from "react";

type TextOwnProps<E extends React.ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E; //* Render A html element dynamically instead of div
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>; //* Omitting TextOwnProps so that it can accept anything like 'htmlFor'

const Text = <E extends React.ElementType>({
  size,
  color,
  children,
  as,
}: TextProps<E>) => {
  const Component = as || "div";
  return (
    <Component className={`classes-with-${size}-${color}`}>
      {children}
    </Component>
  );
};

export default Text;
