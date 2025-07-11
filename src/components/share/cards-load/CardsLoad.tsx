"use client";

import { useTableContext } from "@/context/TableContext";
import { Fragment, ReactNode, useEffect } from "react";

interface CardsLoadProps<T> {
  data: T[];
  render: (item: T) => ReactNode;
}

export default function CardsLoad<T>({ data, render }: CardsLoadProps<T>) {
  const { data: dataCards, refresh } = useTableContext<T>();

  useEffect(() => {
    refresh(data);
  }, []);

  return dataCards.map((item, index) => (
    <Fragment key={index}>{render(item)}</Fragment>
  ));
}
