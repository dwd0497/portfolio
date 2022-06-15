import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './footer.module.scss';
import cn from "classnames";
import { format } from 'date-fns';

interface IFooter extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>{ }

export const Footer = ({className, ...restProps}: IFooter) => {
  return (
    <footer className={cn(styles.footer, className)} {...restProps}>
      <div className={styles.footer__copyright}>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
      <div className={styles.footer__links}>
        <a href='#' className={styles.footer__link}>Пользовательское соглашение</a>
        <a href='#' className={styles.footer__link}>Политика конфиденциальности</a>
      </div>
    </footer>
  );
};
