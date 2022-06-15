import React, { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from 'react';
import styles from './header.module.scss'
import cn from "classnames";
import Logo from '/public/images/logo.svg'
import { Sidebar } from "../Sidebar/Sidebar";
import { ButtonIcon } from "../../components";
import { motion } from 'framer-motion';
import { useRouter } from "next/router";
import Link from "next/link";

interface IHeader extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const Header = ({ className, ...restProps }: IHeader) => {

  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    setIsMenuOpened(false);
  }, [router]);

  useEffect(() => {
    isMenuOpened ? document.body.classList.add("no-scroll") : document.body.classList.remove("no-scroll");
  }, [isMenuOpened])


  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: 0,
      x: '100%',
    },
  };

  return (
    <header className={cn( styles.header, className )} {...restProps}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <ButtonIcon icon="menu" appearance="white" onClick={() => setIsMenuOpened(true)}/>
      <motion.div
        variants={variants}
        animate={isMenuOpened ? 'opened' : 'closed'}
        initial='closed'
        className={styles.header__menu}
      >
        <Sidebar/>
        <ButtonIcon className={styles.header__menuClose} icon="close" appearance="white" onClick={() => setIsMenuOpened(false)}/>
      </motion.div>
    </header>
  );
};
