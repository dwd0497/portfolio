import React, { DetailedHTMLProps, FormHTMLAttributes, useEffect, useState } from 'react';
import styles from './AddReviewForm.module.scss';
import cn from "classnames";
import { Input, Rating, Textarea, Button } from '../../components';
import CloseIcon from './close.svg';
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { API } from "../../helpers/api";

interface IReview extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  productId: string | number,
  isOpened: boolean;
}

interface IReviewForm {
  name: string,
  title: string,
  rating: number,
  message: string,
}

const initialFormState = {
  success: false,
  error: false,
};

export const AddReviewForm = ({productId, className, isOpened, ...restProps}: IReview) => {

  const [submitStatus, setSubmitStatus] = useState<{success: boolean, error: boolean}>(initialFormState);

  const {control, register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset, clearErrors } = useForm<IReviewForm>();

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post(API.review.createDemo, {...formData, description: formData.message, productId});
      console.log(data);
      setSubmitStatus({ success: true, error: false });
    } catch(e) {
      setSubmitStatus({ success: false, error: true });
    }
  };

  useEffect(() => {
    if ( isSubmitSuccessful && submitStatus.success ) {
      reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn(styles.form, className)} {...restProps}>
      <Input
        placeholder="Имя"
        className={styles.form__name}
        {...register('name', {required: {value: true, message: 'Введите ваше имя'}})}
        error={errors.name}
        tabIndex={isOpened ? 0 : -1}
        aria-invalid={!!errors.name}
      />
      <Input
        placeholder="Заголовок отзыва"
        className={styles.form__title}
        {...register('title', {required: {value: true, message: 'Введите заголовок отзыва'}})}
        error={errors.title}
        tabIndex={isOpened ? 0 : -1}
        aria-invalid={!!errors.title}
      />
      <div className={styles.form__rating}>
        Оценка:
        <Controller
          control={control}
          name="rating"
          rules={{ required: { value: true, message: 'Выберите оценку' } }}
          render={({field}) => (
            <Rating
              rating={field.value}
              setRating={field.onChange}
              ref={field.ref}
              error={errors.rating}
              isEditable
              tabIndex={isOpened ? 0 : -1}
            />
          )}
        />
      </div>
      <Textarea
        placeholder="Текст отзыва"
        className={styles.form__message}
        {...register('message', {required: {value: true, message: 'Введите текст отзыва'}})}
        error={errors.message}
        tabIndex={isOpened ? 0 : -1}
        aria-label="Текст отзыва"
        aria-invalid={!!errors.message}
      />
      <div className={styles.form__submit}>
        <Button className={styles.form__button} tabIndex={isOpened ? 0 : -1} onClick={() => clearErrors()}>Отправить</Button>
        * Перед публикацией отзыв пройдет предварительную модерацию и проверку
      </div>
      {submitStatus.success && (
        <div className={styles.form__feedback} role='alert'>
          <span>Ваш отзыв отправлен.</span>
          <span>Спасибо, ваш отзыв будет опубликован после проверки.</span>
          <button
            className={styles.form__feedbackClose}
            onClick={() => setSubmitStatus(initialFormState)}
            aria-label="Закрыть оповещение"
          >
            <CloseIcon />
          </button>
        </div>
      )}
      {submitStatus.error && (
        <div className={cn(styles.form__feedback, styles.form__feedback_error)} role='alert'>
          <span>Упс, что-то пошло не так, попробуйте позже.</span>
          <button
            className={styles.form__feedbackClose}
            onClick={() => setSubmitStatus(initialFormState)}
            aria-label="Закрыть оповещение"
          >
            <CloseIcon />
          </button>
        </div>
      )}
    </form>
  );
};
