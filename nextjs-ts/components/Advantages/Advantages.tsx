import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Advantages.module.scss';
import { IPageAdvantage } from "../../interfaces/innerPage.interface";
import cn from "classnames";
import Tick from './tick.svg';
import { Paragraph } from "../../components";

interface IAdvantages extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>{
  advantages: IPageAdvantage[];
}

export const Advantages = ({ className, advantages, ...restProps }: IAdvantages) => {
  return (
    <ul className={cn(styles.advantages, className)} {...restProps}>
      {advantages.map((advantage) => (
        <li className={styles.advantage} key={advantage._id}>
          <Tick />
          <div className={styles.advantage__title}>{advantage.title}</div>
          <hr/>
          <Paragraph>{advantage.description}</Paragraph>
        </li>
      ))}
    </ul>
  );
};
