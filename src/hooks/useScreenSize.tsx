import { useContext } from "react";
import { ScreenSizeContext } from "/providers/screen-size-provider";

export const useScreenSize = () => {
  const ctx = useContext(ScreenSizeContext);

  if (!ctx) {
    throw new Error(
      "No ScreenSizeContext found. Make sure useScreenSize is being used within ScreenSizeProvider"
    );
  }

  return ctx;
};
