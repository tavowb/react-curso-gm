import { useState, type ReactNode } from "react";
import { GlobalContext } from "./global.context";

interface GlobalContextProps {
  children: ReactNode;
}

const EmptyGlobalState: number = 0;

export const GlobalProvider = ({ children }: GlobalContextProps) => {
  const [value, setValue] = useState<number>(EmptyGlobalState);

  return (
    <GlobalContext.Provider value={{ value, setValue }}>
      {children}
    </GlobalContext.Provider>
  );
};
