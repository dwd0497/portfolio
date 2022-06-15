import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from "classnames";
import styles from "./Tag.module.scss";

interface ITag extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  tagColor?: 'ghost' | 'red' | 'gray' | 'green' | 'brand',
  size?: 's' | 'm',
}

export const Tag = ({tagColor = 'brand', size = 's', className, children, ...restProps}: ITag) => {
  return (
    <div
      className={cn(
        styles.tag,
        {
          [styles.tag_s]: size === 's',
          [styles.tag_m]: size === 'm',
          [styles.tag_ghost]: tagColor === 'ghost',
          [styles.tag_red]: tagColor === 'red',
          [styles.tag_gray]: tagColor === 'gray',
          [styles.tag_green]: tagColor === 'green',
          [styles.tag_brand]: tagColor === 'brand',
        },
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};
