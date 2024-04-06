import { NavBarProvider } from "./NavigationContext";
import { ModalProvider } from "./modalContext";
import { SolutionModalProvider } from "./SolutionContext";

export const CombinedProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const { children } = props;
  return (
    <NavBarProvider>
      <ModalProvider>
        <SolutionModalProvider title={""} content={""} imgSrc={""}>
          {children}
        </SolutionModalProvider>
      </ModalProvider>
    </NavBarProvider>
  );
};
