import { useContext } from "react";
import { ModalContext } from "./ModalContext";

const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("Modal is being used outside of its provider");
  }
  return context;
};
export { useModalContext };