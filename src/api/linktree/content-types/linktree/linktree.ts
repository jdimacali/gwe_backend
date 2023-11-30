// Interface automatically generated by schemas-to-ts

export interface Linktree {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    name: string;
    url: string;
    icon?: string;
  };
}
export interface Linktree_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  url: string;
  icon?: string;
}

export interface Linktree_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  url: string;
  icon?: string;
}

export interface Linktree_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  name: string;
  url: string;
  icon?: string;
}
