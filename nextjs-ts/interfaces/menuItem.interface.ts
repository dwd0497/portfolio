import { ReactFragment } from "react";
import { TopLevelCategory } from "./innerPage.interface";

export interface IMenuItem {
  _id: {
    secondCategory: string,
  };
  isOpened?: boolean;
  pages: IPageItem[];
}

export interface IPageItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export interface ITopLevelMenuItem {
  route: string;
  name: string;
  icon: JSX.Element;
  id: TopLevelCategory;
}