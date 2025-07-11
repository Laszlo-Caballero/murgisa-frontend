"use client";
import Button from "@/components/ui/button/Button";
import Input from "@/components/ui/input/Input";
import { MdOutlinePayments } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { FormaPagoSchema } from "@/schemas/FormaPago.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@/hooks/useMutation";
import { FormaPago, Response } from "@/interfaces/responsefinal.interface";
import { z } from "zod";
import axios from "axios";
import Load from "@/components/share/load/Load";
import { useTableContext } from "@/context/TableContext";
import { toast } from "sonner";
import { useQuery } from "@/hooks/useQuery";
import { useEffect } from "react";

interface ActualizarFormaPagoProps {
  onClose?: () => void;
  id: number;
}

export default function ActualizarFormaPago({
  onClose,
  id,
}: ActualizarFormaPagoProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(FormaPagoSchema),
  });
  const { refresh } = useTableContext<FormaPago>();

  const { mutate, isLoading } = useMutation<
    z.infer<typeof FormaPagoSchema>,
    Response<FormaPago[]>
  >({
    mutationFn: async (data, urlApi, token) => {
      const res = await axios.patch<Response<FormaPago[]>>(
        `${urlApi}/forma-pago/${id}`,
        {
          tipo: data.nombre,
          descripcion: data.descripcion,
          comision: parseFloat(data.comision),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    },
    onSuccess: (data) => {
      toast.success("Forma de pago registrada correctamente");
      refresh(data.data);
      onClose?.();
    },
    onError: () => {
      toast.error("Error al registrar la forma de pago");
    },
  });

  const { data, isLoading: isLoadingFormaPago } = useQuery<Response<FormaPago>>(
    {
      queryFn: async (url, token) => {
        const res = await axios.get<Response<FormaPago>>(
          `${url}/forma-pago/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return res.data;
      },
    }
  );

  useEffect(() => {
    if (data?.data) {
      const formaPago = data.data;
      setValue("nombre", formaPago.tipo);
      setValue("descripcion", formaPago.descripcion);
      setValue("comision", formaPago.comision.toString());
    }
  }, [data, setValue]);

  return (
    <form
      onSubmit={handleSubmit(mutate)}
      className="w-[calc(100vw-3rem)] md:max-h-min max-h-[calc(100vh-4rem)] md:w-[700px] lg:w-[1000px] rounded-lg bg-white p-8 flex flex-col gap-y-4 dark:bg-gray-800 dark:border dark:border-gray-600 "
    >
      {(isLoading || isLoadingFormaPago) && <Load />}
      <header className="flex items-center gap-x-3">
        <MdOutlinePayments
          size={40}
          className="text-blue-600 dark:text-blue-400"
        />
        <div className="flex flex-col">
          <p className="text-xl font-semibold dark:text-gray-300">
            Actualizar Forma de Pago
          </p>
          <p className="text-sm text-gray-500">
            Completa los datos para actualizar la forma de pago en el sistema
          </p>
        </div>
      </header>
      <div className="grid gap-4 dark:text-gray-300">
        <Input
          label="Tipo de Forma de Pago"
          icon={<MdOutlinePayments />}
          placeholder="Ej: Pago con tarjeta"
          {...register("nombre")}
          error={errors.nombre?.message}
        />
        <Input
          label="Descripcion"
          icon={<MdOutlinePayments />}
          placeholder="Ej: Pago mediante tarjetas Visa, MasterCard u otras"
          {...register("descripcion")}
          error={errors.descripcion?.message}
        />
        <Input
          label="Comisión"
          icon={<MdOutlinePayments />}
          placeholder="Ej: 2.5%"
          onChange={(e) => {
            const value = e.target.value;
            const parsedValue = parseFloat(value);
            setValue(
              "comision",
              isNaN(parsedValue) ? "" : parsedValue.toString()
            );
          }}
          value={watch("comision")}
          error={errors.comision?.message}
        />
      </div>
      <div>
        <Button className="flex items-center gap-x-3 mt-4  bg-blue-600 text-white py-3 font-semibold hover:bg-blue-500 dark:bg-blue-500/30">
          <FiPlus size={15} className="mr-2" />
          Actualizar Forma de Pago
        </Button>
      </div>
    </form>
  );
}
