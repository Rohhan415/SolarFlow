import { createContext, useState } from "react";

interface ModalContextType {
  modalOpen: boolean;
  handleModalOpen: () => void;
  handleModalClose: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined
);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <ModalContext.Provider
      value={{ modalOpen, handleModalClose, handleModalOpen }}
    >
      {children}
    </ModalContext.Provider>
  );
};
