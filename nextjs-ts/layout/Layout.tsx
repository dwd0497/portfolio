import React, { FunctionComponent } from 'react';
import styles from "./layout.module.scss";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";
import AppContextProvider, { IAppContext } from '../contexts/appContext';
import { Up } from "../components";

const Layout = ({children}: {children: JSX.Element}) => {
  return (
    <div className={styles.app}>
      <Header className={styles.app__header} />
      <Sidebar className={styles.app__sidebar} />
      <main className={styles.app__main} role="main">{children}</main>
      <Footer className={styles.app__footer} />
      <Up />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component:FunctionComponent<T>) => {
  return function withLayoutComponent (props:T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} topLevelCategory={props.topLevelCategory} >
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
      );
  };
};

