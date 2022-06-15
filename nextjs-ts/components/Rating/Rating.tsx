import React, { DetailedHTMLProps, ForwardedRef, forwardRef, HTMLAttributes, useEffect, useRef, useState } from 'react';
import styles from './Rating.module.scss';
import Star from './star.svg';
import cn from "classnames";
import { FieldErrors } from "react-hook-form";

interface IButton extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  rating: number,
  setRating?: (rating: number) => void,
  isEditable?: Boolean,
  error?: FieldErrors
}

export const Rating = forwardRef(({ rating, setRating, isEditable = false, className, error, tabIndex, ...restProps }: IButton, ref: ForwardedRef<HTMLUListElement>) => {

  const [rawRating, setRawRating] = useState<number>(rating);
  const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(()=> {
    setRawRating(rating);
  },[rating]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (!isEditable || !setRating) {
      return;
    }
    if (e.code === 'ArrowRight' || e.code ==='ArrowUp') {
      e.preventDefault();
      if (!rating) {
        setRating(1);
      } else {
        setRating(rating < 5 ? rating + 1 : 5);
      }
      ratingArrayRef.current[rating]?.focus();
    }
    if (e.code === 'ArrowLeft' || e.code ==='ArrowDown') {
      e.preventDefault();
      setRating(rating > 1 ? rating - 1 : 1);
      ratingArrayRef.current[rating - 2]?.focus();
    }
    if (e.code === 'Space') {
      setRating(rating);
    }
  };

  const computeFocus = (rating:number, i:number):number => {
    if (!isEditable)
      return -1;
    if (!rating && i === 0) {
      return tabIndex ?? 0;
    }
    if (rating === i + 1) {
      return tabIndex ?? 0;
    }
    return  -1;
  };

  return (
    <div
      className={cn(
        styles.rating__wrapper,
        className,
        {[styles.rating__wrapper_error]: error}
        )}>
      <ul className={styles.rating} {...restProps} ref={ref}>
        {new Array(5).fill(<></>).map((item, i) => {
          return (
            <li
              key={i}
              className={cn(styles.rating__item,
                {
                  [styles.rating__item_editable]: isEditable,
                  [styles.rating__item_filled]: rawRating > i
                }
              )}
              onMouseEnter={() => isEditable && setRawRating(i + 1)}
              onMouseLeave={() => isEditable && setRawRating(rating)}
            >
              <span
                ref={r => ratingArrayRef.current?.push(r)}
                tabIndex={computeFocus(rating, i)}
                onKeyDown={handleKeyDown}
                onClick={() => {
                  if (isEditable) {
                    setRating && setRating(i + 1);
                    setRawRating(i + 1);
                  }
                }}
                role={isEditable ? 'slider' : ''}
                aria-valuenow={rating}
                aria-valuemin={1}
                aria-valuemax={5}
                aria-label={isEditable ? 'Укажите рейтинг' : `Рейтинг ${rating}`}
                aria-invalid={!!error}
              >
                <Star
                  className={cn(
                    styles.rating__star,
                    {
                      [styles.rating__star_editable]: isEditable,
                      [styles.rating__star_filled]: rawRating > i
                    }
                  )}
                />
              </span>
            </li>
          );
        })}
      </ul>
      {error && <span className={styles.rating__errorMessage} role="alert">{error.message}</span>}
    </div>
  );
});
