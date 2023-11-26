import { Core } from "./core";
import { File } from "./file";
import { User } from "./user";

export interface Product extends Core {
  createdBy: User;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  referencePrice: number;
  salePrice: number;
  stockQuantity: number;
  images: File[];
}
