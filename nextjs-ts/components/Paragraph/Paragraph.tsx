import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Paragraph.module.scss';
import cn from "classnames";

interface IParagraph extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  size?: 's' | 'm' | "l",
}

export const Paragraph = ({size = 'm', className, children, ...restProps}: IParagraph) => {
  return <p
    className={cn(
      styles.p,
      {[styles.p_s]: size === 's', [styles.p_m]: size === 'm', [styles.p_l]: size === 'l'},
      className
    )}
    {...restProps}
  >
    {children}
  </p>;
};
