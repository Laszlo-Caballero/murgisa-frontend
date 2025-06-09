import { ReactNode } from "react";

interface CardProps {
  title: string;
  icon: ReactNode;
  description?: string;
}

export default function Card({ icon, title, description }: CardProps) {
  return (
    <div className="p-6 w-full rounded-lg shadow-sm bg-white flex items-center justify-between">
      <div className="flex flex-col">
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{description}</p>
      </div>
      <div>{icon}</div>
    </div>
  );
}
