import React from "react";
import { createContext } from "react";

interface SolutionModalContextType {
  title: string;
  content: string;
  imgSrc: string;
}

export const SolutionModalContext = createContext<
  SolutionModalContextType | undefined
>(undefined);

export const SolutionModalProvider: React.FC<
  SolutionModalContextType & { children: React.ReactNode }
> = ({ children, ...content }) => {
  return (
    <SolutionModalContext.Provider value={content}>
      {children}
    </SolutionModalContext.Provider>
  );
};
