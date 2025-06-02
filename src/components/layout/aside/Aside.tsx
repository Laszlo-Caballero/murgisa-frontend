"use client";
import cx from "@/libs/cx";
import Link from "next/link";
import { useState } from "react";

export default function Aside() {
  const [open, setOpen] = useState(false);

  return (
    <aside
      className={cx("h-full bg-blue-300 text-white", open ? "w-64" : "w-16")}
    >
      <Link href="/">Home</Link>
    </aside>
  );
}
