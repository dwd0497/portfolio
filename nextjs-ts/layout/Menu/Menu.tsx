import React, { useContext, KeyboardEvent } from 'react';
import { AppContext } from "../../contexts/appContext";
import { IPageItem } from "../../interfaces/menuItem.interface";
import styles from "./menu.module.scss";
import cn from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { topLevelMenuItems } from "../../helpers/helpers";
import { motion } from "framer-motion";

export const Menu = () => {
  const {menu, setMenu, topLevelCategory} = useContext(AppContext);
  const router  = useRouter();

  const variants = {
    visible: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
      marginBottom: 20,
    },
    hidden: {marginBottom : 0}
  }

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 'auto'
    },
    hidden: { opacity: 0, height: 0 }
  }

  const toggleMiddleLevelMenu = (secondCategory: string) => {
    setMenu && setMenu(menu.map((menuItem) => {
      if (menuItem._id.secondCategory === secondCategory) {
        menuItem.isOpened = !menuItem.isOpened;
      } else {
        menuItem.isOpened = false;
      }
      return menuItem;
    }));
  };

  const openSecondLevelByKey = (key: KeyboardEvent<HTMLSpanElement>, secondCategory: string) => {
    if (key.code === 'Space' || key.code === 'Enter') {
      key.preventDefault();
      toggleMiddleLevelMenu(secondCategory);
    }
  }

  const buildTopLevelMenu = () => (
    <ul className={styles.menu__top}>
      {topLevelMenuItems.map((topLevelItem) => (
        <li className={styles.menu__topItem} key={topLevelItem.id} aria-expanded={topLevelCategory === topLevelItem.id}>
          <Link href={topLevelItem.route}>
            <a
              className={cn(
                styles.menu__topLink,
                {[styles.menu__topLink_active]: topLevelCategory === topLevelItem.id}
              )}
              key={topLevelItem.id}
            >
              {topLevelItem.icon}
              <span className={styles.menu__topName}>{topLevelItem.name}</span>
            </a>
          </Link>
          {topLevelCategory === topLevelItem.id && buildMiddleLevelMenu(topLevelItem.route)}
        </li>
      ))}
    </ul>
  );

  const buildMiddleLevelMenu = (topLevelRoute: string) => (
    <ul className={styles.menu__middle}>
      {menu.map((middleLevelItem) => {
        return (
          <li className={styles.menu__middleItem} key={middleLevelItem._id.secondCategory}>
            <button
              className={styles.menu__middleName}
              onClick={() => toggleMiddleLevelMenu(middleLevelItem._id.secondCategory)}
              onKeyDown={(key: KeyboardEvent<HTMLSpanElement>) => openSecondLevelByKey(key, middleLevelItem._id.secondCategory)}
              aria-expanded={middleLevelItem.isOpened}
            >
              {middleLevelItem._id.secondCategory}
            </button>
            <motion.ul
              layout
              variants={variants}
              initial={middleLevelItem.isOpened ? 'visible' : 'hidden'}
              animate={middleLevelItem.isOpened ? 'visible' : 'hidden'}
            >
              {buildLoverLevelMenu(middleLevelItem.pages, topLevelRoute, !!middleLevelItem.isOpened)}
            </motion.ul>
          </li>
        );
      })}
    </ul>
  );

  const buildLoverLevelMenu = (pages: IPageItem[], topLevelRoute: string, isOpened: boolean) => (
    pages.map((page) => (
      <motion.li key={page.title} variants={variantsChildren}>
        <Link href={`${topLevelRoute}/${page.alias}`}>
          <a tabIndex={isOpened ? 0 : -1} className={cn(
            styles.menu__loverLink,
            {[styles.menu__loverLink_active]: page.alias === router.asPath.split('/')[2]?.split('#')[0]}
            )}
            aria-current={page.alias === router.asPath.split('/')[2]?.split('#')[0] ? 'page' : false}
          >
            {page.title}
          </a>
        </Link>
      </motion.li>
    ))
  );

  return (
    <nav className={styles.menu} role="navigation">
      {buildTopLevelMenu()}
    </nav>
  );
};
