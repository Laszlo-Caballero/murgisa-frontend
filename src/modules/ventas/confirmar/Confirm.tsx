"use client";
import { useStepForm } from "@/components/context/step-form/StepFormContext";
import Load from "@/components/share/load/Load";
import Badge from "@/components/ui/badge/Badge";
import Button from "@/components/ui/button/Button";
import Card from "@/components/ui/card/Card";
import { useMutation } from "@/hooks/useMutation";
import { VentaSteps } from "@/interfaces/venta.interface";
import axios from "axios";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import {
  LuCircleCheckBig,
  LuCreditCard,
  LuDollarSign,
  LuShoppingCart,
  LuUsers,
  LuWrench,
} from "react-icons/lu";
import { toast } from "sonner";

export default function Confirm() {
  const { data, currentStep, setCurrentStep } = useStepForm();
  const totalServicios = data.stepThree.servicios.reduce((acc, curr) => {
    return acc + curr.precio;
  }, 0);

  const totalPersonal = data.stepFive.personal.reduce(
    (acc, curr) => acc + curr.sueldo,
    0
  );

  const totalRecursos = data.stepFour.recurso.reduce(
    (acc, curr) => acc + parseFloat(curr.precio || "0"),
    0
  );

  const { mutate, isLoading } = useMutation<VentaSteps>({
    mutationFn: async (data, urlApi, token) => {
      const response = await axios.post(
        `${urlApi}/venta`,
        {
          fechaInicio: data.stepOne.fechaInicio,
          fechaFin: data.stepOne.fechaFin,
          personal: data.stepFive.personal.map((p) => p.idPersonal),
          clienteId: data.stepTwo.idCliente,
          servicios: data.stepThree.servicios.map((s) => s.idServicio),
          recursos: data.stepFour.recurso.map((r) => r.idRecurso),
          formaPagoId: data.stepSix.formaPagoId,
          nombre: data.stepTwo.nombre,
          ruc: data.stepTwo.ruc,
          dni: data.stepTwo.dni,
          correo: data.stepTwo.correo,
          telefono: data.stepTwo.telefono,
          direccion: data.stepTwo.direccion,
          razonSocial: data.stepTwo.razonSocial,
          fechaNacimiento: data.stepTwo.fechaNacimiento.split("T")[0],
          ciudadId: parseInt(data.stepTwo.ciudad.value),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
    onSuccess: (data) => {
      toast.success("Venta confirmada exitosamente");
    },
    onError: () => {
      toast.error(`Error al confirmar la venta: `);
    },
  });

  return (
    <div className="flex flex-col">
      {isLoading && <Load />}

      <div className="flex items-center gap-x-2">
        <LuCircleCheckBig className="size-6 text-blue-500" />
        <p className="font-bold text-xl">Confirmacion de Venta</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-4 border-b pb-5 border-gray-200">
        <div>
          <p>Informacion del Cliente</p>
          <p>
            <span className="font-bold">Cliente</span>: {data.stepTwo.nombre}{" "}
          </p>
          <p>
            <span className="font-bold">RUC</span>: {data.stepTwo.ruc}
          </p>
          <p>
            <span className="font-bold">Telefono</span>: {data.stepTwo.telefono}
          </p>
        </div>
        <div>
          <p>Detalles de la Venta</p>
          <span className="flex gap-x-2">
            <span className="font-bold">Servicios:</span>
            <span className="flex flex-wrap">
              {data.stepThree.servicios.map((servicio, i) => {
                return (
                  <Badge key={i} className="mr-2">
                    {servicio.nombre} - S/. {servicio.precio}
                  </Badge>
                );
              })}
            </span>
          </span>
          <span className="flex gap-x-2 mt-2">
            <span className="font-bold">Recursos:</span>
            <span className="flex flex-wrap">
              {data.stepFour.recurso.map((recurso, i) => {
                return (
                  <Badge key={i} className="mr-2">
                    {recurso.nombre} - S/. {recurso.precio}
                  </Badge>
                );
              })}
            </span>
          </span>
          <p>
            <span className="font-bold">Personal</span>:{" "}
            {data.stepFive.personal.length} empleado
          </p>
          <p>
            <span className="font-bold">Estado</span>:{" "}
            <Badge className="bg-amber-100 text-amber-600 font-bold border-none dark:bg-amber-500/20 dark:text-amber-500">
              Pendiente
            </Badge>
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <Card
          title="Servicios"
          icon={<LuShoppingCart size={28} className="text-white" />}
          description={`S/. ${totalServicios}`}
          className={{
            container:
              "bg-blue-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-blue-400/10 dark:transition-all",
            icon: "bg-blue-600 rounded-full p-3 dark:bg-blue-500/30",
            text: {
              title: "text-blue-700 dark:text-blue-400",
              description: "text-blue-900 text-3xl dark:text-blue-400",
              extra: "text-blue-600 dark:text-blue-400",
            },
          }}
        />
        <Card
          title="Total Personal"
          icon={<LuUsers size={28} className="text-white" />}
          description={`S/. ${totalPersonal}`}
          className={{
            container:
              "bg-purple-100 shadow-lg  dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-purple-400/10 dark:transition-all",
            icon: "bg-purple-600 rounded-full p-3 dark:bg-purple-500/30",
            text: {
              title: "text-purple-700 dark:text-purple-400",
              description: "text-purple-900 text-3xl dark:text-purple-400",
              extra: "text-purple-600 dark:text-purple-400",
            },
          }}
        />

        <Card
          title="Total Recursos"
          icon={<LuWrench size={28} className="text-white" />}
          description={`S/. ${totalRecursos}`}
          className={{
            container:
              "bg-red-100 shadow-lg  dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-red-400/10 dark:transition-all",
            icon: "bg-red-600 rounded-full p-3 dark:bg-red-500/30",
            text: {
              title: "text-red-700 dark:text-red-400",
              description: "text-red-900 text-3xl dark:text-red-400",
              extra: "text-red-600 dark:text-red-400",
            },
          }}
        />

        <Card
          title="Total Venta"
          icon={<LuDollarSign size={28} className="text-white" />}
          description={`S/. ${totalServicios + totalPersonal}`}
          className={{
            container:
              "bg-green-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-green-400/10 dark:transition-all",
            icon: "bg-green-600 rounded-full p-3 dark:bg-green-500/30",
            text: {
              title: "text-green-700 dark:text-green-400",
              description: "text-green-900 text-3xl dark:text-green-400",
              extra: "text-green-600 dark:text-green-400",
            },
          }}
        />

        <div className="col-span-2 ">
          <Card
            title="Metodo de Pago"
            icon={<LuCreditCard size={28} className="text-white" />}
            description={`${data.stepSix.nombre}`}
            className={{
              container:
                "bg-green-100 shadow-lg dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:shadow-green-400/10 dark:transition-all",
              icon: "bg-green-600 rounded-full p-3 dark:bg-green-500/30",
              text: {
                title: "text-green-700 dark:text-green-400",
                description: "text-green-900 text-3xl dark:text-green-400",
                extra: "text-green-600 dark:text-green-400",
              },
            }}
          />
        </div>
      </div>

      <div className="w-full flex items-center mt-4">
        <Button
          type="button"
          onClick={() => setCurrentStep(currentStep - 1)}
          className="dark:bg-blue-500/30"
        >
          Atras
        </Button>

        <Button
          onClick={() => {
            mutate(data);
          }}
          className="px-12 flex ml-auto items-center gap-x-4 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-blue-500/30"
        >
          Confirmar <IoIosArrowForward />
        </Button>
      </div>
    </div>
  );
}
