"use client";

import { Children, PropsWithChildren, useEffect, useState } from "react";

interface CarouselProps {
  intervalChange?: number;
}

export default function Carousel({
  children,
  intervalChange,
}: PropsWithChildren<CarouselProps>) {
  const countItems = Children.count(children);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % countItems);
    }, intervalChange || 3000);
    return () => clearInterval(interval);
  }, []);

  return Children.map(children, (item, index) => {
    return index === currentIndex && item;
  });
}
