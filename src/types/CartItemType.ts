// types.ts or inside CartContext if only used there
import { Product } from "./Product";

export interface CartItemType extends Product {
  quantity: number;
}
