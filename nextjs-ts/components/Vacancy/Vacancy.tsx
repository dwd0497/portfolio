import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Vacancy.module.scss';
import { IHHData } from "../../interfaces/innerPage.interface";
import cn from "classnames";
import { Heading, Tag } from "../../components";
import Star from './star-in-circle.svg';
import { priceAdapter } from "../../helpers/helpers";

interface IVacancy extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  title: string,
  hhData: IHHData;
}

export const Vacancy = ({ className, title, hhData, ...restProps }: IVacancy) => {
  return (
    <div className={cn(styles.vacancy, className)} {...restProps}>
      <div className={styles.vacancy__header}>
        <Heading tag="h3">Вакансии - {title}</Heading>
        <Tag size="m" tagColor="red">hh.ru</Tag>
      </div>
      <div className={styles.vacancy__info}>
        <div className={styles.vacancy__total}>
          <span className={styles.vacancy__text}>Всего вакансий</span>
          <span className={styles.vacancy__count}>{hhData.count}</span>
        </div>
        <ul className={styles.vacancy__salaryList}>
          <li className={styles.vacancy__salary}>
            <span className={styles.vacancy__text}>Начальный</span>
            <span className={styles.vacancy__count}>{priceAdapter(hhData.juniorSalary)}</span>
            <div className={styles.vacancy__stars}>
              <Star className={cn(styles.vacancy__star, styles.vacancy__star_active)}/>
              <Star className={cn(styles.vacancy__star)}/>
              <Star className={cn(styles.vacancy__star)}/>
            </div>
          </li>
          <li className={styles.vacancy__salary}>
            <span className={styles.vacancy__text}>Средний</span>
            <span className={styles.vacancy__count}>{priceAdapter(hhData.middleSalary)}</span>
            <div className={styles.vacancy__stars}>
              <Star className={cn(styles.vacancy__star, styles.vacancy__star_active)}/>
              <Star className={cn(styles.vacancy__star, styles.vacancy__star_active)}/>
              <Star className={cn(styles.vacancy__star)}/>
            </div>
          </li>
          <li className={styles.vacancy__salary}>
            <span className={styles.vacancy__text}>Профессионал</span>
            <span className={styles.vacancy__count}>{priceAdapter(hhData.seniorSalary)}</span>
            <div className={styles.vacancy__stars}>
              <Star className={cn(styles.vacancy__star, styles.vacancy__star_active)}/>
              <Star className={cn(styles.vacancy__star, styles.vacancy__star_active)}/>
              <Star className={cn(styles.vacancy__star, styles.vacancy__star_active)}/>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
