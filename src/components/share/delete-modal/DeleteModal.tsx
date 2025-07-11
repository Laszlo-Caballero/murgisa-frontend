"use client";

import Modal from "@/components/ui/modal/Modal";
import { PropsWithChildren, useState } from "react";
import { LuTrash2 } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import Button from "@/components/ui/button/Button";
import { useTableContext } from "@/context/TableContext";
import { useMutation } from "@/hooks/useMutation";
import axios from "axios";
import { Response } from "@/interfaces/responsefinal.interface";
import { toast } from "sonner";
import Load from "../load/Load";

interface DeleteModalProps extends PropsWithChildren {
  id: number | string;
  endpoint: string;
}

export default function DeleteModal<T>({
  id,
  endpoint,
  children,
}: DeleteModalProps) {
  const [open, setOpen] = useState(false);
  const { refresh } = useTableContext<T>();

  const { mutate, isLoading } = useMutation<
    {
      id: number | string;
      endpoint: string;
    },
    Response<T[]>
  >({
    mutationFn: async (data, urlApi, token) => {
      const response = await axios.delete(
        `${urlApi}/${data.endpoint}/${data.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
    onSuccess: (data) => {
      toast.success("Elemento desactivado correctamente");
      refresh(data?.data);
      setOpen(false);
    },
    onError: () => {
      toast.error(`Error al desactivar el elemento`);
    },
  });

  return (
    <>
      <button onClick={() => setOpen(true)}>{children}</button>
      {open && (
        <Modal onClose={() => setOpen(false)}>
          {isLoading && <Load />}
          <div className="flex flex-col p-4 gap-4 bg-white dark:bg-slate-800 items-center rounded-xl">
            <span className="p-8 max-w-max rounded-full border border-red-500 bg-red-100 dark:bg-red-600/20 text-red-500 dark:text-red-400">
              <IoMdClose size={40} />
            </span>
            <p className="text-gray-800 dark:text-gray-200 text-center text-lg font-semibold mt-4">
              ¿Esta seguro de desactivar este elemento? <br /> Esta acción no se
              puede deshacer.
            </p>
            <div className="flex items-center gap-x-4">
              <Button onClick={() => setOpen(false)}>Cancelar</Button>
              <Button
                className="bg-red-500"
                onClick={() => mutate({ id, endpoint })}
              >
                Confirmar
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
