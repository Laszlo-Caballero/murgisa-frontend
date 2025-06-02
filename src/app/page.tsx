import Link from "next/link";

export default function Home() {
  return (
    <div className="flex p-2 gap-x-4">
      <Link
        href="/ventas"
        className="py-2 px-5 max-w-max bg-blue-400 text-white rounded-xl"
      >
        Ventas
      </Link>
      <Link
        href="/mantenimiento/preventivo"
        className="py-2 px-5 max-w-max bg-blue-400 text-white rounded-xl"
      >
        Mantenimiento Preventivo
      </Link>
    </div>
  );
}
