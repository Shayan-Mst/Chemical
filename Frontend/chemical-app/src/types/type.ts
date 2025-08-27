import type { ReactNode } from "react";

export type ProductRange = {
  image: string;
  title: string;
  description: string;
  products: string[];
};

export interface Industries {
  name: string;
  svg: ReactNode; // inline svg as string OR you can use ReactNode if you want JSX
  linkPage: string;
  color : string;
  border :string
}
