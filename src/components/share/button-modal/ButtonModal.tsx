"use client";
import Button from "@/components/ui/button/Button";
import Modal from "@/components/ui/modal/Modal";
import React, { PropsWithChildren, ReactNode, useState } from "react";

interface CrearProfesionProps {
  modal: ReactNode;
  className?: string;
}

export default function ButtonModal({
  modal,
  className,
  children,
}: PropsWithChildren<CrearProfesionProps>) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        className={className}
        onClick={() => {
          setShowModal(true);
        }}
      >
        {children}
      </Button>
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          {modal}
        </Modal>
      )}
    </>
  );
}
