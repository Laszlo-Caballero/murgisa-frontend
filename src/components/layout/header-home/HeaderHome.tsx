"use client";

import { useAuth } from "@/context/AuthContext";

export default function HeaderHome({ greeting }: { greeting: string }) {
  const { user } = useAuth();

  return (
    <p className="text-3xl font-bold text-gray-900 dark:text-white">
      {greeting}, {user?.personal.nombre} 👋
    </p>
  );
}
