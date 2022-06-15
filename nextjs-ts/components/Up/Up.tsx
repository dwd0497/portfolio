import React, { useEffect } from 'react';
import styles from './Up.module.scss';
import { useScrollY } from "../../hooks/useScrollY";
import { motion , useAnimation} from "framer-motion";
import { ButtonIcon } from "../../components";


export const Up = () => {
  const y = useScrollY();

  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: y / (document.body.scrollHeight - document.body.clientHeight)});
  },[y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div animate={controls} initial={{opacity: 0}} className={styles.up} onClick={scrollToTop}>
      <ButtonIcon icon='up' aria-label="Наверх" />
    </motion.div>
  );
};
