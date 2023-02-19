import React, { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import { RiErrorWarningLine } from "react-icons/ri";
import { useDialog } from "../../hooks/useDialog";

const Modal = () => {
  const modalRef = useRef<any>(null);
  const { message, setIsOpen, setResponse } = useDialog();

  useEffect(() => {
    let handler = (ev: MouseEvent) => {
      if (!modalRef.current?.contains(ev.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="absolute inset-0 grid min-h-full place-content-center bg-gray-800/80">
      <div
        onClick={(e) => {}}
        className="w-full max-w-sm rounded-md bg-gray-900 py-5 px-10"
        ref={modalRef}
      >
        <div className="flex flex-col items-center space-y-5 pb-2 text-center text-lg">
          <RiErrorWarningLine className="my-3 text-6xl" />
          <div>
            <p>Are you sure you wan't to delete</p>
            <p className="mt-0 text-xl font-bold">{message}?</p>
          </div>
          <p>You won't be able to revert this!</p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Button
            onClick={() => {
              setResponse(false);
              setIsOpen(false);
            }}
          >
            No, Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              setResponse(true);
              setIsOpen(false);
            }}
          >
            Yes, Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
