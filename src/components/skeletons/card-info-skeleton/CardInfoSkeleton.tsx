export default function CardInfoSkeleton() {
  return (
    <div className="p-4 rounded-lg border border-gray-200 shadow-md max-w-sm">
      {/* Encabezado */}
      <div className="flex items-center gap-4 mb-4">
        {/* Círcculo para la foto o initials */}
        <div className="bg-gray-300 rounded-full w-16 h-16 animate-pulse" />

        {/* Nombre y estado */}
        <div className="flex-1">
          <div className="h-5 bg-gray-300 rounded-md w-3/4 animate-pulse mb-2" />
          <div className="h-4 bg-gray-300 rounded-md w-1/4 animate-pulse" />
        </div>
      </div>

      {/* Detalles */}
      <ul className="space-y-2">
        {/* Número de documento */}
        <li className="h-4 bg-gray-300 rounded-md w-2/3 animate-pulse" />

        {/* Correo electrónico */}
        <li className="h-4 bg-gray-300 rounded-md w-3/4 animate-pulse" />

        {/* Teléfono */}
        <li className="h-4 bg-gray-300 rounded-md w-1/2 animate-pulse" />

        {/* Sueldo */}
        <li className="h-4 bg-gray-300 rounded-md w-1/5 animate-pulse" />

        {/* Ingreso */}
        <li className="h-4 bg-gray-300 rounded-md w-1/3 animate-pulse" />

        {/* Profesión */}
        <li className="h-4 bg-gray-300 rounded-md w-1/2 animate-pulse" />
      </ul>
    </div>
  );
}
