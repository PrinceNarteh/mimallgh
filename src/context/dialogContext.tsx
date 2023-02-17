import { createContext, Dispatch, SetStateAction, useState } from "react";

interface IDialogContext {
  response: boolean | null;
  isOpen: boolean;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setResponse: Dispatch<SetStateAction<boolean | null>>;
}

export const DialogContext = createContext<IDialogContext>({
  response: null,
  isOpen: false,
  message: "",
  setMessage: () => {},
  setResponse: () => {},
  setIsOpen: () => {},
});

export default function DialogContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [response, setResponse] = useState<boolean | null>(null);
  const [message, setMessage] = useState<string>("John Doe");

  return (
    <DialogContext.Provider
      value={{
        isOpen,
        message,
        setMessage,
        setIsOpen,
        response,
        setResponse,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
}
