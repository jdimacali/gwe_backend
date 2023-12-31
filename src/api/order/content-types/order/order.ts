// Interface automatically generated by schemas-to-ts

import { User } from '../../../../common/schemas-to-ts/User';
import { Product } from '../../../product/content-types/product/product';
import { User_Plain } from '../../../../common/schemas-to-ts/User';
import { Product_Plain } from '../../../product/content-types/product/product';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export interface Order {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    users_permissions_user?: { data: User };
    products: { data: Product[] };
  };
}
export interface Order_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  users_permissions_user?: User_Plain;
  products: Product_Plain[];
}

export interface Order_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  users_permissions_user?: number;
  products: number[];
}

export interface Order_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  users_permissions_user?: AdminPanelRelationPropertyModification<User_Plain>;
  products: AdminPanelRelationPropertyModification<Product_Plain>;
}
