import { Correctivo } from "@/interfaces/response.interface";
import CardInfo from "@/components/ui/card-info/CardInfo";
import Button from "@/components/ui/button/Button";
import { LuSquarePen, LuTrash } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { LuDollarSign } from "react-icons/lu";
import { PiCity } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { PiMapPinArea } from "react-icons/pi";
import cx from "@/libs/cx";
import { LuFilter } from "react-icons/lu";
import Table from "@/components/ui/table/Table";
import { LuCalendar } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import Badge from "@/components/ui/badge/Badge";
import { LuTrash2 } from "react-icons/lu";
import { LuWrench } from "react-icons/lu";

interface ListarCorrectivoProps {
  data: Correctivo[];
}

export default function ListarCorrectivo({ data }: ListarCorrectivoProps) {
  return (
    <div className="py-4 flex w-full flex-col gap-y-4">
      <div className="py-4 flex w-full flex-col gap-y-4">
        <section className="flex w-full flex-col p-4 rounded-md shadow-md bg-white  dark:bg-gray-800/50 dark:shadow-lg dark:border dark:border-gray-700">
          <span className="flex items-center gap-x-2 font-semibold text-black text-lg dark:text-white">
            <LuFilter size={20} className="text-orange-600" />
            Filtros de Búsqueda
          </span>
          <p className="text-sm mt-1 text-gray-500">
            Utiliza los filtros para encontrar mantenimientos solicitados de
            manera rápida
          </p>
        </section>
      </div>

      <div className="flex flex-col  w-full rounded-md shadow-md p-4 bg-white  dark:bg-gray-800/50 dark:shadow-lg dark:border dark:border-gray-700">
        <div className="flex items-center justify-between w-full">
          <p className="font-medium text-black text-xl dark:text-white">
            Mantenimientos Registrados
          </p>
          <span className="bg-gray-300 text-xs text-gray-600 font-semibold border border-gray-300 rounded-full px-3 py-1">
            Total: 5
          </span>
        </div>
        <div>
          <p className="text-sm text-gray-500 mt-1">
            Gestiona todos los mantenimiento correctivos registrados en el
            sistema{" "}
          </p>
        </div>
        {
          <Table
            className="mt-4 bg-white w-full rounded-md  "
            data={data}
            columns={[
              {
                header: "Mantenimiento",
                cell: (props) => {
                  return (
                    <div className="flex items-start gap-x-3">
                      <span className="bg-red-100 p-2 rounded-lg">
                        <LuWrench size={15} className="text-orange-600" />
                      </span>
                      <div className="flex flex-col">
                        <p className="font-semibold text-sm">
                          {props.row.tipo}
                        </p>
                        <p className="text-xs text-gray-600">
                          ID: CORR-00{props.row.idCorrectivo}
                        </p>
                      </div>
                    </div>
                  );
                },
              },
              {
                header: "Responsable",
                cell: (props) => {
                  return (
                    <div className="flex flex-col gap-y-1 text-center xl:text-start">
                      <span className="flex xl:flex-row flex-col items-center gap-x-2">
                        <LuUsers size={15} className="text-green-500" />
                        <span className="text-sm font-semibold text-nowrap">
                          {props.row.responsable}
                        </span>
                      </span>
                      <span>
                        <p className="text-xs text-gray-600">
                          {" "}
                          {props.row.cantTecnicos} técnicos
                        </p>
                      </span>
                    </div>
                  );
                },
              },
              {
                header: "Fecha Programada",
                cell: (props) => {
                  return (
                    <div className="flex flex-col gap-y-1">
                      <span className="flex items-center gap-x-2">
                        <LuCalendar size={15} className="text-blue-500" />
                        <p className="text-sm font-semibold">
                          {" "}
                          {new Date(props.row.fecha).toLocaleDateString(
                            "es-ES"
                          )}
                        </p>
                      </span>
                    </div>
                  );
                },
              },
              {
                header: "Maquinaria",
                cell: (props) => {
                  return (
                    <span className="text-sm">{props.row.maquinaria}</span>
                  );
                },
              },
             {
                header: "Estado",
                cell: (props) => {
                 return (
                   <span
                     className={cx(
                       `px-2 py-1 rounded-full text-xs`,
                        props.row.estado
                          ? "bg-green-100 text-green-600 dark:bg-green-500/30 dark:text-green-300 dark:border-green-700"
                          : "bg-red-100 text-red-600 dark:bg-red-500/30 dark:text-red-300 dark:border-red-700"
                      )}
                    >
                      {props.row.estado ? "Activo" : "Inactivo"}
                    </span>
                  );
                },
             },
              {
                header: "Acciones",
                cell: (props) => {
                  return (
                    <span className="flex items-center gap-x-4">
                      <LuSquarePen className="text-red-500" />
                      <LuTrash2 className="text-gray-900" />
                    </span>
                  );
                },
              },
            ]}
          ></Table>
        }
      </div>

      {/* <div className="py-4 flex w-full flex-col gap-y-4">
                <section className="flex w-full flex-col p-4 rounded-md shadow-md bg-white">
                    <span className="flex items-center gap-x-2 font-semibold text-black text-lg">
                        <LuFilter size={20} className="text-orange-700" />
                        Filtros de Búsqueda
                    </span>
                    <p className="text-sm mt-1 text-gray-500">
                        Utiliza los filtros para encontrar mantenimientos programados de
                        manera rápida
                    </p>
                </section>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {data.map((correctivo) =>{
                return(
                    <CardInfo
                            key={correctivo.idCorrectivo}
                            title={correctivo.descripcion}
                            icon={
                                <HiOutlineWrenchScrewdriver
                                size={20}
                                className="text-orange-600"
                                />
                            }
                            className={{
                                container: "bg-white",
                                header: {
                                title: "text-lg",
                                description: "text-sm text-gray-500 font-semibold",
                                icon: "bg-orange-100 rounded-lg",
                                },
                                span: "bg-green-100 text-green-700 border border-green-300 font-semibold ",
                            }}
                            description={`ID-COR-00${correctivo.idCorrectivo}`}
                            span={correctivo.progreso}
                        >
                            <div className="flex justify-between gap-x-4 flex-col gap-y-2 py-3  ">
                                <span className="flex items-center gap-x-2">
                                <PiCity size={15} className="text-blue-600" />
                                <p className="text-sm text-blue-600 font-semibold flex items-center gap-x-1">
                                    Maquinaria:
                                    <span className="text-gray-600 text-sm">
                                    {correctivo.maquinaria}
                                    </span>
                                </p>
                                </span>
                
                                <span className="flex items-center gap-x-2">
                                <FaRegUser size={15} className="text-purple-600" />
                                <p className="text-sm text-purple-600 font-semibold">
                                    Tecnico: <span className="text-gray-600 text-sm">{"Paco"}</span>
                                </p>
                                </span>
                                
                                <span className="flex items-center gap-x-2 ">
                                <LuDollarSign size={15} className="text-green-600" />
                                <p className="text-sm text-green-600 font-semibold flex items-center gap-x-1">
                                    Precio: <span className="text-gray-600 text-sm">{"S/. 200"}</span>
                                </p>
                                </span>
                            </div>
                            <div className="flex items-center justify-between gap-x-2">
                                <Button className="flex items-center gap-x-3 py-1 font-semibold mt-4 bg-white text-red-600 border border-red-300 hover:bg-red-100">
                                <LuTrash size={15} />
                                Desactivar
                                </Button>
                            </div>
                        </CardInfo>
            )})}
        </div> */}
    </div>
  );
}
