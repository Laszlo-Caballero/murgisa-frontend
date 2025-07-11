"use client";
import cx from "@/libs/cx";

import { LuSquarePen } from "react-icons/lu";
import { LuTrash2 } from "react-icons/lu";
import { LuBuilding } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { LuCalendar } from "react-icons/lu";

import Badge from "@/components/ui/badge/Badge";
import { PiMoneyWavyLight } from "react-icons/pi";
import DeleteModal from "@/components/share/delete-modal/DeleteModal";


import { Proveedor } from "@/interfaces/responsefinal.interface";
import { ColumnDef } from "@/interfaces/table.interface";


export const ProveedorColumns: ColumnDef<Proveedor>[] = [
    {
    header: "Profesion",
        cell: (props) => (
            <div className="flex xl:flex-row flex-col items-center lg:items-start gap-x-3">
                <span className="bg-red-100 dark:bg-red-500/10 p-2 rounded-lg">
                <LuBuilding
                size={15}
                className="text-red-600 dark:text-red-400"
                />
                </span>
                <div className="flex flex-col gap-y-1 text-center lg:text-start">
                <p className="font-semibold text-nowrap">
                    {props.row?.razonSocial}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                    RUC: {props.row?.ruc}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                    ID: PROV-00{props.row?.idProovedor}
                </p>
                </div>
            </div>
        ),
    },
    {
        header: "Responsable",
        cell: (props) => (
            <div className="flex flex-col gap-y-1">
            <span className="flex items-center gap-x-2">
                <LuUser size={15} className="text-black dark:text-white" />
                <p className="font-semibold">
                {props.row?.nombreResponsable}
                </p>
            </span>
            <p className="text-sm text-gray-600 dark:text-gray-300">
                DNI: {props.row?.dniResponsable}
            </p>
            <span className="flex items-center gap-x-2">
                <LuMail
                size={15}
                className="text-yellow-600 dark:text-yellow-400"
                />
                <p className="text-sm text-gray-600 dark:text-gray-300">
                {props.row?.correo}
                </p>
            </span>
            </div>
        ),
    },
    {
        header: "Última Compra",
        cell: (props) => (
            <div className="flex flex-col gap-y-1">
            <span className="flex items-center gap-x-2">
                <LuCalendar
                size={15}
                className="text-blue-500 dark:text-blue-300"
                />
                <p className="text-sm font-semibold">
                {"20-05-2025"}
                </p>
            </span>
            </div>
        ),
    },
    {
        header: "Estado",
        cell: (props) => (
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
        ),
    },
        {
        header: "Acciones",
        cell: (props) => (
            <span className="flex items-center gap-x-4">
                <LuSquarePen className="text-red-500" />
                <DeleteModal id={props.row?.idProovedor} endpoint="proveedor">
                <LuTrash2 className="text-gray-900 dark:text-gray-400 cursor-pointer" />
                </DeleteModal>
            </span>
        ),
    }
]