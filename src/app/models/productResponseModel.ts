import { Product } from './product';
import { ResponseModel } from './responseModel';

export interface ProductResponseModule extends ResponseModel {
  data: Product[];
}
