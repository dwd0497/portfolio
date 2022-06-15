import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Heading.module.scss';
import cn from "classnames";

interface IHTag extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>{
  tag: "h1" | "h2" | "h3",
}

export const Heading = ({ tag, children, className, ...restProps }: IHTag) => {
  switch (tag) {
    case "h1":
      return <h1 className={cn(styles.h1, className)} {...restProps}>{children}</h1>;
    case "h2":
      return <h2 className={cn(styles.h2, className)} {...restProps}>{children}</h2>;
    case "h3":
      return <h3 className={cn(styles.h3, className)} {...restProps}>{children}</h3>;
    default:
      return <></>;
  }
};
