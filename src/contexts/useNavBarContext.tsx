import { useContext } from "react";
import { NavBarContext } from "./NavigationContext";

export function useNavBarContext() {
  const context = useContext(NavBarContext);
  if (!context) {
    throw new Error("useNavBarContext must be used within a NavBarProvider");
  }
  return context;
}
