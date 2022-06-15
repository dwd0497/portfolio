import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './ButtonIcon.module.scss';
import cn from "classnames";
import close from './icons/close.svg';
import menu from './icons/menu.svg';
import up from './icons/up.svg';

export const icons = {
  up,
  menu,
  close,
};

export type iconsType = keyof typeof icons;


interface ButtonIcon extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearance?: "primary" | "white",
  icon: iconsType,
}

export const ButtonIcon = ({ appearance = 'primary', icon, className, ...restProps }: ButtonIcon) => {
  const IconComp = icons[icon];
  return (
    <button
      className={cn(
        styles.button,
        {[styles.button_white]: appearance === 'white'},
        className,
      )}
      {...restProps}
    >
      <IconComp />
    </button>
  );
};
