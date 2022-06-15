import React, { DetailedHTMLProps, HTMLAttributes, KeyboardEvent } from 'react';
import styles from './Sort.module.scss';
import cn from "classnames";
import SortIcon from './SortIcon.svg';
import { SortType } from "../ProductContent/sortReducer";

interface ISort extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  currentSortType: SortType | null,
  onSortChange: (sortType: SortType.Price | SortType.Rating) => void
}

export const Sort = ({className, currentSortType, onSortChange, ...restProps}: ISort) => {
  return (
    <div className={styles.sort}>
      <div className={styles.sort__title} id='sort'>Сортировка</div>
      <ul className={cn(styles.sort__list, className)} {...restProps}>
        <li>
          <div
            id='rating'
            className={cn(styles.sort__item,
              {[styles.sort__item_active]: currentSortType === SortType.Rating}
            )}
            onClick={() => onSortChange(SortType.Rating)}
            onKeyDown={(key:KeyboardEvent<HTMLDivElement>) => {
              if (key.code === 'Space' || key.code === 'Enter') {
                key.preventDefault();
                onSortChange(SortType.Rating);
              }
            }}
            tabIndex={0}
            aria-selected={currentSortType === SortType.Rating}
            aria-labelledby="sort rating"
          >
            <SortIcon className={styles.sort__icon}/>
            <span className={styles.sort__name}>По рейтингу</span>
          </div>
        </li>
        <li>
          <div
            id='price'
            className={cn(styles.sort__item,
              {[styles.sort__item_active]: currentSortType === SortType.Price}
            )}
            onClick={() => onSortChange(SortType.Price)}
            onKeyDown={(key:KeyboardEvent<HTMLDivElement>) => {
              if (key.code === 'Space' || key.code === 'Enter') {
                key.preventDefault();
                onSortChange(SortType.Price);
              }
            }}
            tabIndex={0}
            aria-selected={currentSortType === SortType.Price}
            aria-labelledby="sort price"
          >
            <SortIcon className={styles.sort__icon}/>
            <span className={styles.sort__name}>По цене</span>
          </div>
        </li>
      </ul>
    </div>
  );
};



