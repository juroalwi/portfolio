import { useContext } from "react";
import { PopupContext } from "/providers/PopupProvider";

export const usePopup = () => {
  const ctx = useContext(PopupContext);

  if (!ctx) {
    throw new Error(
      "No PopupContext found. Make sure usePopup is being used within PopupProvider",
    );
  }

  return ctx;
};
