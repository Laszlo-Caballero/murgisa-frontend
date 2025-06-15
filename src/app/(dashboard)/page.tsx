import Card from "@/components/ui/card/Card";
import {
  LuChartColumnIncreasing,
  LuShoppingCart,
  LuUsers,
} from "react-icons/lu";
import { PiWrenchBold } from "react-icons/pi";
import { LuActivity } from "react-icons/lu";
import { actividadesData } from "@/data/activdadesRecientes";
import Activity from "@/components/ui/activity/Activity";
import { LuTarget } from "react-icons/lu";
import LinkHome from "@/components/ui/link-home/LinkHome";
import { LuBriefcase } from "react-icons/lu";
import Badge from "@/components/ui/badge/Badge";
import { IoWarningOutline } from "react-icons/io5";
import { equiposAtencion } from "@/data/equiposAtencion";
import cx from "@/libs/cx";
import { ventasRecientes } from "@/data/ventasRecientes";
import Carousel from "@/components/ui/carousel/Carousel";
import { tips } from "@/data/tips";
import { getColor } from "@/libs/getColor";
import { LuDollarSign } from "react-icons/lu";
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

      <div className="grid grid-cols-3 gap-6 grid-rows-3">
        {/* Actividades Recientes */}
        <div className="col-span-2 row-span-3 p-6 rounded-lg bg-white shadow-sm flex flex-col gap-y-4">
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
        <div className="p-6 rounded-lg row-span-2 bg-white shadow-sm max-h-max gap-y-4 flex flex-col">
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

        <div className="rounded-lg p-6 bg-white shadow-sm gap-y-4 flex flex-col h-full">
          <Carousel>
            {tips.map((tip, index) => {
              const color = getColor(tip.color);

              return (
                <div
                  key={index}
                  className="flex gap-x-4 items-center p-4 border border-gray-200 shadow-xs rounded-lg h-full w-full"
                >
                  <div
                    className={cx(
                      "p-1 rounded-full",
                      color.textColor,
                      color.bgColor
                    )}
                  >
                    {tip.icon}
                  </div>

                  <div className="flex flex-col gap-y-2">
                    <Badge className="font-semibold">{tip.type}</Badge>
                    <p className="text-sm font-semibold">{tip.label}</p>
                    <p className="text-xs text-muted-foreground">
                      {tip.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Equipos que requieren atención */}
        <div className="p-6 rounded-lg bg-white shadow-sm flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <p className="text-2xl font-semibold leading-none tracking-tight flex items-center space-x-2">
              <IoWarningOutline className="text-yellow-500" />
              <span>Equipos que Requieren Atención</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Equipos con mantenimiento pendiente o en estado crítico
            </p>
          </div>
          {equiposAtencion.map((equipo) => {
            return (
              <div
                key={equipo.idEquipo}
                className="p-4 border rounded-lg border-gray-300 flex flex-col w-full gap-y-2"
              >
                <h4 className="font-medium text-sm">{equipo.nombre}</h4>
                <span className="flex w-full justify-between">
                  <p className="text-sm text-muted-foreground">Estado:</p>
                  <Badge
                    className={cx(
                      "font-semibold",
                      equipo.estado === "Critica" && "bg-red-100 text-red-800",
                      equipo.estado === "Alta" &&
                        "bg-yellow-100 text-yellow-800",
                      equipo.estado === "Media" && "bg-blue-100 text-blue-800",
                      equipo.estado === "Baja" && "bg-green-100 text-green-800"
                    )}
                  >
                    {equipo.estado}
                  </Badge>
                </span>
                <p className="text-sm text-muted-foreground">
                  Último Mantenimiento: {equipo.ultimoMantenimiento}
                </p>
              </div>
            );
          })}
        </div>
        {/* Ventas Recientes */}
        <div className="p-6 rounded-lg bg-white shadow-sm flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <p className="text-2xl font-semibold leading-none tracking-tight flex items-center space-x-2">
              <LuShoppingCart className="text-green-500" />
              <span>Ventas Recientes</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Últimas órdenes de venta registradas
            </p>
          </div>
          {ventasRecientes.map((venta) => {
            return (
              <div
                key={venta.idVenta}
                className="p-4 border rounded-lg border-gray-300 flex flex-col w-full gap-y-2"
              >
                <span className="flex w-full justify-between">
                  {" "}
                  <h4 className="font-medium text-sm">{venta.titulo}</h4>
                  <Badge
                    className={cx(
                      "font-semibold",
                      venta.estado === "Cancelada" && "bg-red-100 text-red-800",
                      venta.estado === "Pendiente" &&
                        "bg-yellow-100 text-yellow-800",
                      venta.estado === "Completada" &&
                        "bg-green-100 text-green-800"
                    )}
                  >
                    {venta.estado}
                  </Badge>
                </span>

                <span className="flex w-full justify-between">
                  <p className="text-sm text-muted-foreground">Cliente:</p>
                  <p className="text-sm text-muted-foreground">
                    {venta.cliente}
                  </p>
                </span>

                <span className="flex w-full justify-between">
                  <p className="text-sm text-muted-foreground">Fecha:</p>
                  <p className="text-sm text-muted-foreground">{venta.fecha}</p>
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-6 rounded-lg row-span-2 bg-white shadow-sm max-h-max gap-y-4 flex flex-col">
        <div className="flex flex-col gap-y-2">
          <p className="text-2xl font-semibold leading-none tracking-tight flex items-center space-x-2">
            <LuDollarSign className="text-purple-600" />
            <span>Resumen Financiero del Mes</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Estado financiero actual de la empresa
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6">
          <span className="text-center">
            <p>Ingresos</p>
            <p className="text-2xl font-bold text-green-600">$ 150,000</p>
          </span>

          <span className="text-center">
            <p>Gastos</p>
            <p className="text-2xl font-bold text-red-600">$ 150,000</p>
          </span>

          <span className="text-center">
            <p>Utilidad</p>
            <p className="text-2xl font-bold text-blue-600">$ 150,000</p>
          </span>

          <span className="text-center">
            <p>Margen</p>
            <p className="text-2xl font-bold text-purple-600">32.4%</p>
          </span>
        </div>
      </div>
    </div>
  );
}
