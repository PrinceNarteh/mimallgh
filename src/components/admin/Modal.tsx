import React from "react";
import { Button } from "./Button";
import { RiErrorWarningLine } from "react-icons/ri";

const Modal = () => {
  return (
    <div className="absolute inset-0 grid min-h-full place-content-center bg-gray-800/80">
      <div className="w-full max-w-sm divide-y divide-gray-500 rounded bg-gray-900 p-5">
        <div className="flex flex-col items-center pb-2">
          <RiErrorWarningLine className="my-3 text-6xl" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at
          dolorum id nihil consequuntur aperiam iure sint? Voluptatum ad cum
          officiis sapiente? Dolorum architecto non veniam cumque iste, quae
          reiciendis!
        </div>
        <div className="mb-0 flex items-center justify-center gap-3">
          <Button>Cancel</Button>
          <Button variant="danger">Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
