import Card from "@/components/ui/card/Card";
import {
  LuChartColumnIncreasing,
  LuShoppingCart,
  LuUser,
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
import HeaderHome from "@/components/layout/header-home/HeaderHome";
import { ApiRequest } from "@/libs/api";
import {
  Log,
  MantenimientoPreventivo,
  Response,
  Venta,
} from "@/interfaces/responsefinal.interface";

interface ResponseHome {
  actividades: Log[];
  totalVentas: number;
  mantenimiento: number;
  servicios: number;
  personal: number;
  lastVentas: Venta[];
  lastMantenimiento: MantenimientoPreventivo[];
}

export default async function Home() {
  const actualHour = new Date().getHours();
  const greeting = actualHour > 12 ? "¡Buenos días!" : "¡Buenas tardes!";
  const date = new Date().toLocaleString();

  const data = await ApiRequest<Response<ResponseHome>>({
    metod: "get",
    endpoint: "home",
  });

  return (
    <div className="w-full h-full p-8 flex flex-col gap-y-6 bg-gray-50 dark:bg-gray-900">
      <header className="flex flex-col">
        <HeaderHome greeting={greeting} />
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Aquí tienes un resumen de las actividades de MURGISA -{" "}
          {date.split(",")[0]}
        </p>
      </header>
      <div className="grid lg:grid-cols-4 mg:grid-cols-2 gap-6">
        <Card
          title="Total"
          icon={
            <LuChartColumnIncreasing
              size={28}
              className="text-white dark:text-blue-400"
            />
          }
          description={`S/. ${data?.data?.totalVentas}`}
          className={{
            container:
              "bg-blue-100 dark:bg-gray-800 dark:border dark:border-gray-700 shadow-lg hover:dark:shadow-blue-400/20 transition-all",
            icon: "bg-blue-600 dark:bg-blue-500/30 rounded-full p-3 shadow-xl",
            text: {
              title: "text-blue-700 dark:text-blue-400",
              description: "text-blue-900 text-3xl dark:text-blue-400",
              extra: "text-blue-800 text-xs dark:text-blue-400",
            },
          }}
        />
        <Card
          title="Ordenes de Mantenimiento"
          icon={
            <PiWrenchBold
              size={28}
              className="text-white dark:text-emerald-400"
            />
          }
          description={data?.data?.mantenimiento.toString()}
          className={{
            container:
              "bg-emerald-100 dark:bg-gray-800 dark:border dark:border-gray-700 hover:dark:shadow-emerald-400/20 shadow-lg",
            icon: "bg-emerald-600 dark:bg-emerald-500/30 rounded-full p-3 shadow-xl",
            text: {
              title: "text-emerald-700 dark:text-emerald-400",
              description: "text-emerald-900 text-3xl dark:text-emerald-400",
              extra: "text-emerald-800 text-xs dark:text-emerald-400",
            },
          }}
        />
        <Card
          title="Personal Activo"
          icon={
            <LuUser size={28} className="text-white dark:text-purple-400" />
          }
          description={data?.data?.personal.toString()}
          className={{
            container:
              "bg-purple-100 dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-purple-400/20 shadow-lg",
            icon: "bg-purple-600 dark:bg-purple-500/30 rounded-full p-3 shadow-xl",
            text: {
              title: "text-purple-700 dark:text-purple-400",
              description: "text-purple-900 text-3xl dark:text-purple-400",
              extra: "text-purple-800 text-xs dark:text-purple-400",
            },
          }}
        />
        <Card
          title="Servicios Activos"
          icon={
            <LuBriefcase
              size={28}
              className="text-white dark:text-orange-400"
            />
          }
          description={data?.data?.servicios.toString()}
          className={{
            container:
              "bg-orange-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 hover:dark:shadow-orange-400/20",
            icon: "bg-orange-600 dark:bg-orange-500/30 rounded-full p-3 shadow-xl",
            text: {
              title: "text-orange-700 dark:text-orange-400",
              description: "text-orange-900 text-3xl dark:text-orange-400",
              extra: "text-orange-800 text-xs dark:text-orange-400",
            },
          }}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6 grid-rows-3">
        {/* Actividades Recientes */}
        <div className="lg:col-span-2 row-span-3 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <p className="text-2xl font-semibold leading-none tracking-tight flex items-center space-x-2">
              <LuActivity className="dark:text-green-200" />
              <span className="dark:text-white">Actividades Recientes</span>
            </p>
            <p className="text-sm text-muted-foreground dark:text-gray-100">
              Últimas acciones realizadas en el sistema
            </p>
          </div>
          {data?.data.actividades.map((actividad, index) => {
            return <Activity {...actividad} key={index} />;
          })}
        </div>

        {/* Acciones Rápidas */}
        <div className="p-6 rounded-lg row-span-2 bg-white dark:bg-gray-800 shadow-sm max-h-max gap-y-4 flex flex-col">
          <div className="flex flex-col gap-y-2">
            <p className="text-2xl font-semibold leading-none tracking-tight flex items-center space-x-2">
              <LuTarget className="dark:text-purple-400" />
              <span className="dark:text-white">Acciones Rápidas</span>
            </p>
            <p className="text-sm text-muted-foreground dark:text-gray-100">
              Accesos directos a funciones principales
            </p>
          </div>

          <LinkHome
            href="/ventas"
            icon={
              <LuChartColumnIncreasing
                size={15}
                className="dark:text-green-400"
              />
            }
            className={{
              icon: "bg-green-200 text-green-600 dark:bg-green-500/30 dark:text-green-400",
              container:
                "dark:bg-gray-900 dark:border dark:border-gray-700 dark:hover:bg-green-400/20",
              description: "dark:text-gray-300",
              title: "dark:text-white",
            }}
            title="Nueva Venta"
            description="Registra una nueva venta de productos o servicios"
          />
          <LinkHome
            href="/mantenimiento-correctivo"
            icon={<PiWrenchBold size={15} className="text-blue-400" />}
            className={{
              icon: "bg-blue-200 dark:bg-blue-500/30 text-blue-600",
              container:
                "dark:bg-gray-900 dark:border dark:border-gray-700 dark:hover:bg-blue-400/20",
              description: "dark:text-gray-300",
              title: "dark:text-white",
            }}
            title="Orden de Mantenimiento"
            description="Registra una nueva orden de mantenimiento"
          />
          <LinkHome
            href="/cliente"
            icon={<LuUsers size={15} className="text-purple-400" />}
            className={{
              icon: "bg-purple-200 text-purple-600 dark:bg-purple-500/30",
              container:
                "dark:bg-gray-900 dark:border dark:border-gray-700 dark:hover:bg-purple-400/20",
              description: "dark:text-gray-300",
              title: "dark:text-white",
            }}
            title="Registrar Cliente"
            description="Añade un nuevo cliente al sistema"
          />
          <LinkHome
            href="/personal"
            icon={<LuBriefcase size={15} className="text-red-500" />}
            className={{
              icon: "bg-red-200 text-red-600 dark:bg-red-500/30",
              container:
                "dark:bg-gray-900 dark:border dark:border-gray-700 dark:hover:bg-red-400/20",
              description: "dark:text-gray-300",
              title: "dark:text-white",
            }}
            title="Registrar Personal"
            description="Añade un nuevo miembro del personal al sistema"
          />
        </div>

        <div className="rounded-lg p-6 bg-white dark:bg-gray-800 shadow-sm gap-y-4 items-center justify-center flex flex-col h-full">
          <Carousel>
            {tips.map((tip, index) => {
              const color = getColor(tip.color);

              return (
                <div
                  key={index}
                  className="flex gap-x-4 items-center p-4 border dark:bg-gray-900/80 border-gray-200 dark:border-gray-700 shadow-xs rounded-lg  w-full"
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
                    <Badge className="font-semibold max-w-max">
                      {tip.type}
                    </Badge>
                    <p className="text-sm font-semibold dark:text-white">
                      {tip.label}
                    </p>
                    <p className="text-xs text-muted-foreground dark:text-gray-300">
                      {tip.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Equipos que requieren atención */}
        <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <p className="text-2xl font-semibold leading-none tracking-tight flex items-center space-x-2">
              <IoWarningOutline className="text-yellow-500" />
              <span className="dark:text-white">
                Equipos que Requieren Atención
              </span>
            </p>
            <p className="text-sm text-muted-foreground dark:text-gray-100">
              Equipos con mantenimiento pendiente o en estado crítico
            </p>
          </div>
          {data?.data.lastMantenimiento.length === 0 ? (
            <p className="text-sm text-muted-foreground dark:text-gray-300">
              No hay equipos que requieran atención en este momento.
            </p>
          ) : (
            data?.data.lastMantenimiento.map((equipo) => {
              return (
                <div
                  key={equipo.mantenimientoPreventivoId}
                  className="p-4 border rounded-lg border-gray-300 dark:bg-gray-900 dark:border-gray-700 flex flex-col w-full gap-y-2"
                >
                  <h4 className="font-medium text-sm dark:text-white">
                    {equipo.recurso.nombre}
                  </h4>
                  <span className="flex w-full justify-between">
                    <p className="text-sm text-muted-foreground dark:text-gray-300">
                      Estado:
                    </p>
                    <Badge
                      className={cx(
                        "font-semibold",
                        equipo.prioridad === "Critica" &&
                          "bg-red-100 text-red-800",
                        equipo.prioridad === "Alta" &&
                          "bg-yellow-100 text-yellow-800",
                        equipo.prioridad === "Media" &&
                          "bg-blue-100 text-blue-800",
                        equipo.prioridad === "Baja" &&
                          "bg-green-100 text-green-800"
                      )}
                    >
                      {equipo.prioridad}
                    </Badge>
                  </span>
                </div>
              );
            })
          )}
        </div>
        {/* Ventas Recientes */}
        <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-2">
            <p className="text-2xl font-semibold leading-none tracking-tight flex items-center space-x-2">
              <LuShoppingCart className="text-green-500" />
              <span className="dark:text-white">Ventas Recientes</span>
            </p>
            <p className="text-sm text-muted-foreground dark:text-gray-300">
              Últimas órdenes de venta registradas
            </p>
          </div>
          {data?.data.lastVentas.length === 0 ? (
            <p className="text-sm text-muted-foreground dark:text-gray-300">
              No hay ventas recientes en este momento.
            </p>
          ) : (
            data?.data.lastVentas.map((venta) => {
              return (
                <div
                  key={venta.idVenta}
                  className="p-4 border rounded-lg border-gray-300 dark:bg-gray-900 dark:border-gray-700 flex flex-col w-full gap-y-2"
                >
                  <span className="flex w-full justify-between">
                    {" "}
                    <h4 className="font-medium text-sm dark:text-white">
                      Estado
                    </h4>
                    <Badge
                      className={cx(
                        "font-semibold",
                        !venta.estado
                          ? "bg-red-100 text-red-800"
                          : "bg-green-100 text-green-800"
                      )}
                    >
                      {venta.estado ? "Completada" : "Anulada"}
                    </Badge>
                  </span>

                  <span className="flex w-full justify-between">
                    <p className="text-sm text-muted-foreground dark:text-gray-300">
                      Cliente:
                    </p>
                    <p className="text-sm text-muted-foreground dark:text-gray-300">
                      {venta.cliente.nombre}
                    </p>
                  </span>

                  <span className="flex w-full justify-between">
                    <p className="text-sm text-muted-foreground dark:text-gray-300">
                      Fecha:
                    </p>
                    <p className="text-sm text-muted-foreground dark:text-gray-300">
                      {venta.fechaVenta.split("T")[0]}
                    </p>
                  </span>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
