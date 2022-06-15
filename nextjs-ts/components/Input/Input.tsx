import React, { DetailedHTMLProps, ForwardedRef, forwardRef } from 'react';
import cn from "classnames";
import styles from "./Input.module.scss";
import { FieldErrors } from "react-hook-form";

interface IInput extends DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  error?: FieldErrors
}

export const Input = forwardRef(({className, children, error, ...restProps}: IInput, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div
      className={cn(
        styles.input__wrapper,
        className,
      )}
    >
      <input
        className={cn(
          styles.input,
          {[styles.input_error]: error}
        )}
        {...restProps}
        ref={ref}
      />
      {error && <span className={styles.input__errorMessage} role="alert">{error.message}</span>}
    </div>
  );
});
