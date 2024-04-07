import { NavBarProvider } from "./NavigationContext";
import { ModalProvider } from "./modalContext";

export const CombinedProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const { children } = props;
  return (
    <NavBarProvider>
      <ModalProvider>{children}</ModalProvider>
    </NavBarProvider>
  );
};
