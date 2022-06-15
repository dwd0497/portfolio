import { IProduct } from "../../interfaces/product.interface";

export const enum SortType {
  Rating,
  Price,
  Reset
}

type SortActions = {type: SortType.Price} | {type: SortType.Rating} | {type: SortType.Reset, payload: IProduct[]}

interface sortState {
  currentType: SortType | null;
  items: IProduct[];
}

export const sortReducer = (state: sortState, action: SortActions):sortState  => {
  switch (action.type) {
    case SortType.Price:
      return {
        currentType: SortType.Price,
        items: state.items.sort((a, b) => a.price > b.price ? -1 : 1),
      };
    case SortType.Rating:
      return {
        currentType: SortType.Rating,
        items: state.items.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1),
      };
    case SortType.Reset:
      return {
        currentType: null,
        items: action.payload,
      };
    default:
      throw new Error('Неверный тип сортировки');
  }

};