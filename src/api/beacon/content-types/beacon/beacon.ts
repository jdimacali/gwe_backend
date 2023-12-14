// Interface automatically generated by schemas-to-ts

import { Links } from '../../../../components/links/interfaces/Links';
import { Links_Plain } from '../../../../components/links/interfaces/Links';
import { Links_NoRelations } from '../../../../components/links/interfaces/Links';

export interface Beacon {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    Links: Links[];
    Title: string;
    Subtitle?: string;
  };
}
export interface Beacon_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Links: Links_Plain[];
  Title: string;
  Subtitle?: string;
}

export interface Beacon_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Links: Links_NoRelations[];
  Title: string;
  Subtitle?: string;
}

export interface Beacon_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Links: Links_Plain[];
  Title: string;
  Subtitle?: string;
}