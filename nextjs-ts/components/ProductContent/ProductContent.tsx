import React, { DetailedHTMLProps, HTMLAttributes, useEffect, useReducer } from 'react';
import { IInnerPage, TopLevelCategory } from "../../interfaces/innerPage.interface";
import styles from './ProductContent.module.scss';
import { IProduct } from "../../interfaces/product.interface";
import cn from "classnames";
import { Heading, Tag, Vacancy, Advantages, Tags } from "../../components";
import parse from 'html-react-parser';
import { Sort } from "../Sort/Sort";
import { sortReducer, SortType } from "./sortReducer";
import { Product } from "../Product/Product";
import { declDepOnNumber } from "../../helpers/helpers";

interface IProductContent extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  page: IInnerPage,
  products: IProduct[],
  topLevelCategory: TopLevelCategory,
}

export const ProductContent = ({page, products, topLevelCategory, className, ...restProps}: IProductContent) => {
  const [ sortState, sortDispatch ] = useReducer(sortReducer, {
    items: products,
    currentType: null
  });

  useEffect(()=> {
    sortDispatch({type: SortType.Reset, payload: products});
  }, [products]);

  return (
    <div className={cn(styles.product, className)} {...restProps}>
      <div className={styles.product__header}>
        <Heading tag="h1" className={styles.product__title}>{page.title}</Heading>
        <Tag
          size="m"
          tagColor="gray"
          className={styles.product__count}
          aria-label={`${products.length} ${declDepOnNumber(products.length, ['элемент', 'элемента', 'элементов'])}`}
        >
          {products.length}
        </Tag>
        <Sort
          currentSortType={sortState.currentType}
          onSortChange={(sortType:SortType.Price | SortType.Rating) => sortDispatch({type: sortType})}
          className={styles.product__sort}
        />
      </div>
      {!!products?.length && (
        <ul className={styles.product__list}>
          {products.map((product) => <li key={product._id}><Product layout product={product}/></li>)}
        </ul>
      )}
      {topLevelCategory === TopLevelCategory.Courses && page.hh && (
        <Vacancy title={page.category} hhData={page.hh} className={styles.product__vacancy}/>
      )}
      {!!page.advantages?.length && (
        <Advantages className={styles.product__advantages} advantages={page.advantages}/>
      )}
      {!!page.seoText && (
        <div className={styles.product__seo}>
          {parse(page.seoText)}
        </div>
      )}
      {!!page.tags?.length && (
        <Tags tags={page.tags}/>
      )}
    </div>
  );
};
