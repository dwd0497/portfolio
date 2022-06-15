import React from 'react';
import { withLayout } from "../../layout/Layout";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";
import { IMenuItem } from "../../interfaces/menuItem.interface";
import { ParsedUrlQuery } from "querystring";
import { topLevelMenuItems } from "../../helpers/helpers";
import { TopLevelCategory } from "../../interfaces/innerPage.interface";
import { API } from "../../helpers/api";

const Category = ({topLevelCategory}: ICategoryPage) => {
  return (
    <div>
      {topLevelMenuItems.find((topLevelMenuItem) => topLevelMenuItem.id === topLevelCategory)?.name}
    </div>
  );
};

export default withLayout(Category);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: topLevelMenuItems.map((topLevelMenuItem) => topLevelMenuItem.route),
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<ICategoryPage> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const topLevelMenuItem = topLevelMenuItems.find((topLevelMenuItem) => topLevelMenuItem.route === `/${params.category}`);

  if (!topLevelMenuItem) {
    return {
      notFound: true,
    };
  }

  const {data: menu} = await axios.post<IMenuItem[]>(API.topPage.find, {firstCategory: topLevelMenuItem.id});
  return {
    props: {
      topLevelCategory: topLevelMenuItem.id,
      menu,
    }
  };
};

interface ICategoryPage extends Record<string, unknown> {
  topLevelCategory: TopLevelCategory,
  menu: IMenuItem[],
}

