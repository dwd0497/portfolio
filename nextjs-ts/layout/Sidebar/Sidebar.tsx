import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Menu } from '../Menu/Menu';
import Logo from '/public/images/logo.svg'
import cn from "classnames";
import styles from "./sidebar.module.scss";
import Link from "next/link"
import { Search } from "../../components/Search/Search";

interface ISidebar extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>{ }

export const Sidebar = ({className, ...props}: ISidebar) => {
  return (
    <aside className={cn(styles.sidebar, className)} {...props}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <Search />
      <Menu />
    </aside>
  );
};
