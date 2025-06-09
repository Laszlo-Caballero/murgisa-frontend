import { ReactNode } from "react";
import { Color } from "./color.interace";

export interface Link {
  titulo: string;
  color?: Color;
  links: {
    icono: ReactNode;
    label: string;
    href: string;
  }[];
}
