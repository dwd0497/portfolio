import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Tags.module.scss';
import cn from "classnames";
import { Tag, Heading } from "../../components";


interface ITags extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  tags: string[],
}

export const Tags = ({ className, tags, ...restProps }: ITags) => {
  return (
    <div className={cn(styles.tags, className)} {...restProps}>
      <Heading className={styles.tags__title} tag="h3">Получаемые навыки</Heading>
      <ul className={styles.tags__list}>
        {tags.map((tag) => (
          <li className={styles.tags__item} key={tag}><Tag tagColor="brand">{tag}</Tag></li>
        ))}
      </ul>
    </div>
  );
};
