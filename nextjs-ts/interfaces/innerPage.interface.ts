export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export interface IPageAdvantage {
  _id: string;
  title: string;
  description: string;
}

export interface IHHData {
  _id: string;
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt: Date;
}

export interface IInnerPage {
  tags: string[];
  _id: string;
  secondCategory: string;
  alias: string;
  title: string;
  category: string;
  seoText?: string;
  tagsTitle: string;
  metaTitle: string;
  metaDescription: string;
  topLevelCategory: TopLevelCategory;
  advantages?: IPageAdvantage[];
  createdAt: Date;
  updatedAt: Date;
  hh?: IHHData;
}