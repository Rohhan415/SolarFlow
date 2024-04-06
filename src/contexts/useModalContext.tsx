import { useContext } from "react";
import { ModalContext } from "./modalContext";

export function useModalContext() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a NavBarProvider");
  }
  return context;
}
