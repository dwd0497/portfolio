import { ITopLevelMenuItem } from "../interfaces/menuItem.interface";
import CoursesIcon from "./icons/courses.svg";
import { TopLevelCategory } from "../interfaces/innerPage.interface";
import ServicesIcon from "./icons/services.svg";
import BooksIcon from "./icons/books.svg";
import ProductsIcon from "./icons/products.svg";
import React from "react";

export const topLevelMenuItems: ITopLevelMenuItem[] = [
  {route: '/courses', icon: <CoursesIcon/>, id: TopLevelCategory.Courses, name: 'Курсы'},
  {route: '/services', icon: <ServicesIcon/>, id: TopLevelCategory.Services, name: 'Сервисы'},
  {route: '/books', icon: <BooksIcon/>, id: TopLevelCategory.Books, name: 'Книги'},
  {route: '/products', icon: <ProductsIcon/>, id: TopLevelCategory.Products, name: 'Товары'},
];

export const priceAdapter = (price:number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽';

export const declDepOnNumber = (number: number, titles: [string, string, string]):string => {
  const cases =   [2, 0, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}