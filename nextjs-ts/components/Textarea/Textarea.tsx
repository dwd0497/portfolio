import React, { DetailedHTMLProps, forwardRef, ForwardedRef } from 'react';
import cn from "classnames";
import styles from "./Textarea.module.scss";
import { FieldErrors } from "react-hook-form";

interface ITextarea extends DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  error?: FieldErrors
}

export const Textarea = forwardRef(({className, children, error, ...restProps}: ITextarea, ref: ForwardedRef<HTMLTextAreaElement>) => {
  return (
    <div className={cn(styles.textarea__wrapper, className)}>
      <textarea
        className={cn(
          styles.textarea,
          {[styles.textarea_error]: error}
        )}
        ref={ref}
        {...restProps}
      />
      {error && <span className={styles.textarea__errorMessage} role="alert">{error.message}</span>}
    </div>
  );
});
