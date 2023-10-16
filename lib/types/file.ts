import { Core } from "./core";
import { User } from "./user";

export interface File extends Core {
  createdBy: User;
  originalName: string;
  destination: string;
  paths: FilePaths;
  mimetype: string;
  size: number;
}

export interface FilePaths {
  original: string;
  large: string;
  medium: string;
  small: string;
  extraSmall: string;
}
