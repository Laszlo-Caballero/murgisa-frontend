"use client";
import cx from "@/libs/cx";
import { ColumnDef } from "@/interfaces/table.interface";
import { Recurso } from "@/interfaces/responsefinal.interface";

import { LuSquarePen } from "react-icons/lu";
import { LuTrash2 } from "react-icons/lu";
import { LuBuilding2 } from "react-icons/lu";
import { LuClipboardList } from "react-icons/lu";
import { LuPackage } from "react-icons/lu";
import Badge from "@/components/ui/badge/Badge";
import { PiMoneyWavyLight } from "react-icons/pi";


export const RecusoColumns: ColumnDef<Recurso>[] = [
    {
        header: "Recurso",
        cell: (props) => {
            return (
                <div className="flex items-start gap-x-3 dark:text-white">
                <span className="bg-red-100 p-2 rounded-lg dark:bg-red-500/20">
                    <LuPackage size={15} className="text-red-600 dark:text-red-500" />
                </span>
                <div className="flex flex-col text-nowrap">
                    <p className="font-semibold text-sm">
                    {props.row.nombre}
                    </p>
                    <p className="text-xs text-gray-600">
                    ID: REC-00{props.row.idRecurso}
                    </p>
                </div>
                </div>
            );
        },
    },
    {
        header: "Categoria",
        cell: (props) => {
            return (
            <div className="flex flex-col gap-y-2 dark:text-white">
                <span className="flex xl:flex-row flex-col items-center gap-x-2">
                <LuClipboardList size={15} className="text-blue-600" />
                <p className="font-semibold text-sm">
                    {props.row.tipoRecurso.nombre}
                </p>
                </span>
                <p className="text-gray-500 text-xs text-center xl:text-start">
                {props.row.tipoRecurso.descripcion}
                </p>
            </div>
            );
        },
    },
    {
        header: "Disponibilidad",
        cell: (props) => {
            return (
            <div className="flex flex-col gap-y-2">
                <Badge className="bg-yellow-100 text-yellow-800 border-orange-200 font-semibold">
                En uso
                </Badge>
                <p className="text-xs text-gray-500">Vendido 10 veces</p>
            </div>
            );
        },
    },
    {
        header: "Proveedor",
        cell: (props) => {
            return (
            <div className="flex flex-col gap-y-2 text-white">
                <span className="flex items-center gap-x-2">
                <LuBuilding2 size={15} className="text-purple-600" />
                <p className="font-semibold text-sm">
                    {props.row.proveedor.razonSocial}
                </p>
                </span>
                <span className="text-xs text-gray-500 text-nowrap">
                Responsable: {props.row.proveedor.nombreResponsable}
                </span>
            </div>
            );
        },
    },
    {
        header: "Precio",
        cell: (props) => {
            return (
            <span className="flex xl:flex-row flex-col w-auto items-center gap-x-2">
                <PiMoneyWavyLight size={15} className="text-green-600" />
                <p className="font-semibold text-green-600 text-sm text-nowrap">
                S/. {props.row.precio}
                </p>
            </span>
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
                <LuTrash2 className="text-gray-900 dark:text-gray-400" />
            </span>
            );
        },
    }
]