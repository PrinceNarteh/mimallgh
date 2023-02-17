import { useContext } from "react";
import { DialogContext } from "../context/dialogContext";

export const useDialog = () => useContext(DialogContext);
