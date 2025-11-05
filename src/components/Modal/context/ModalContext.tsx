import { createContext, useState } from "react";

const ModalContext = createContext<{
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  state: false,
  setState: () => null,
});

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState(false);
  return (
    <ModalContext.Provider value={{ state, setState }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider, ModalContext };
