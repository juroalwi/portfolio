import { createContext, ReactNode, useEffect, useState } from "react";
import { Popup } from "../components/popup";

type PopupVariant = "info" | "success" | "error";

export type PopupContextType = {
  open: (message: string, type?: PopupVariant) => void;
};
export const PopupContext = createContext<PopupContextType | null>(null);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<{
    message: string;
    type: PopupVariant;
  } | null>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setData(null);
    }, 6000);
    return () => clearTimeout(timeoutId);
  }, [data]);

  return (
    <PopupContext.Provider
      value={{
        open: (message: string, type?: PopupVariant) => {
          setData({ message, type: type || "info" });
        },
      }}
    >
      {children}

      {data && (
        <div className="fixed top-8 right-8">
          <Popup message={data.message} type={data.type} />
        </div>
      )}
    </PopupContext.Provider>
  );
};
