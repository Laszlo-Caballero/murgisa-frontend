import Card from "@/components/ui/card/Card";
import { LuChartColumnIncreasing, LuUsers } from "react-icons/lu";
import { PiWrenchBold } from "react-icons/pi";
import { LuActivity } from "react-icons/lu";
import { actividadesData } from "@/data/activdadesRecientes";
import Activity from "@/components/ui/activity/Activity";
import { LuTarget } from "react-icons/lu";
import LinkHome from "@/components/ui/link-home/LinkHome";
import { LuBriefcase } from "react-icons/lu";
import Badge from "@/components/ui/badge/Badge";
export default function Home() {
  const actualHour = new Date().getHours();
  const greeting = actualHour > 12 ? "¡Buenos días!" : "¡Buenas tardes!";
  const date = new Date().toLocaleString();

  return (
    <div className="w-full h-full p-8 flex flex-col gap-y-6 bg-gray-50">
      <header className="flex flex-col">
        <p className="text-3xl font-bold text-gray-900">
          {greeting}, Administrador 👋
        </p>
        <p className="text-gray-600 mt-1">
          Aquí tienes un resumen de las actividades de MURGISA -{" "}
          {date.split(",")[0]}
        </p>
      </header>
      <div className="grid grid-cols-4 gap-6">
        <Card
          title="Ventas del Mes"
          icon={<LuChartColumnIncreasing size={28} />}
          description={"125.000"}
          extra="+12.5% desde el mes pasado"
        />
        <Card
          title="Ordenes de Mantenimiento"
          icon={<PiWrenchBold size={28} />}
          description="12"
          extra="28 completadas este mes"
        />

        <Card
          title="Personal Activo"
          icon={<LuUsers size={28} />}
          description="42"
          extra="En 5 departamentos"
        />
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Actividades Recientes */}
        <div className="col-span-2 p-6 rounded-lg bg-white shadow-sm flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <p className="text-2xl font-semibold leading-none tracking-tight flex items-center space-x-2">
              <LuActivity />
              <span>Actividades Recientes</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Últimas acciones realizadas en el sistema
            </p>
          </div>
          {actividadesData.map((actividad, index) => {
            return <Activity {...actividad} key={index} />;
          })}
        </div>

        {/* Acciones Rápidas */}
        <div className="p-6 rounded-lg bg-white shadow-sm max-h-max gap-y-4 flex flex-col">
          <div className="flex flex-col gap-y-2">
            <p className="text-2xl font-semibold leading-none tracking-tight flex items-center space-x-2">
              <LuTarget />
              <span>Acciones Rápidas</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Accesos directos a funciones principales
            </p>
          </div>

          <LinkHome
            href="/ventas"
            icon={<LuChartColumnIncreasing size={15} />}
            className={{
              icon: "bg-green-200 text-green-600",
            }}
            title="Nueva Venta"
            description="Registra una nueva venta de productos o servicios"
          />
          <LinkHome
            href="/mantenimiento-correctivo"
            icon={<PiWrenchBold size={15} />}
            className={{
              icon: "bg-blue-200 text-blue-600",
            }}
            title="Orden de Mantenimiento"
            description="Registra una nueva orden de mantenimiento"
          />
          <LinkHome
            href="/cliente"
            icon={<LuUsers size={15} />}
            className={{
              icon: "bg-purple-200 text-purple-600",
            }}
            title="Registrar Cliente"
            description="Añade un nuevo cliente al sistema"
          />
          <LinkHome
            href="/personal"
            icon={<LuBriefcase size={15} />}
            className={{
              icon: "bg-red-200 text-red-600",
            }}
            title="Registrar Personal"
            description="Añade un nuevo miembro del personal al sistema"
          />
        </div>
      </div>
    </div>
  );
}
