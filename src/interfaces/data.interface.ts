import { ReactNode } from "react";
import { Color } from "./color.interace";

export interface Tip {
  label: string;
  type: string;
  icon: ReactNode;
  color: Color;
  description: string;
}
