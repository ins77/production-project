import React, { FC } from "react";
import cls from "./Button.module.scss";
import { classNames } from "helpers/classNames/classNames";
import { ButtonHTMLAttributes } from "react";

export enum ButtonTheme {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ButtonTheme.CLEAR,
    ...restProps
  } = props;

  console.log("222 classNames", classNames);

  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...restProps}
    >
      {children}
    </button>
  );
};
