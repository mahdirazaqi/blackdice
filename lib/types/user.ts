import { Core } from "./core";

export interface User extends Core {
  name: string;
  phone?: string;
  admin: boolean;
}
