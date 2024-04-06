import { useContext } from "react";
import { SolutionModalContext } from "./SolutionContext";

export function useSolutionModalContext() {
  const context = useContext(SolutionModalContext);
  if (!context) {
    throw new Error(
      "useSolutionModalContext must be used within a SolutionModalProvider"
    );
  }
  return context;
}
