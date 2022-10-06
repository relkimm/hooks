import { useState } from "react";

export function useForceUpdate() {
  const [_, setCursor] = useState(0);

  function forceUpdate() {
    setCursor((cursor) => cursor + 1);
  }

  return forceUpdate;
}
