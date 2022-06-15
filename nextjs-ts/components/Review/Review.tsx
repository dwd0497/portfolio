import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Review.module.scss';
import { IProductReview } from "../../interfaces/product.interface";
import cn from "classnames";
import UserIcon from './user.svg';
import { Rating, Paragraph } from "../../components";
import { format } from "date-fns";
import { ru } from "date-fns/locale";


interface IReview extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  review: IProductReview,
}

export const Review = ({ review, className, ...restProps }: IReview) => {
  const { name, title , description, rating, createdAt} = review;

  return (
    <div className={cn(styles.review, className)} {...restProps}>
      <div className={styles.review__header}>
        <UserIcon className={styles.review__icon} />
        <p className={styles.review__name}>{name}</p>
        <p className={styles.review__title}>{title}</p>
        <p className={styles.review__date}>{format(new Date(createdAt), "dd MMMM yyyy", {locale: ru})}</p>
        <Rating rating={rating} />
      </div>
      <Paragraph size="s" className={styles.review__description}>{description}</Paragraph>
    </div>
  );
};
