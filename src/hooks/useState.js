import { useForceUpdate } from "./useForceUpdate";

let state;

let isFirstCall = true;

export function useState(initialValue) {
  const forceUpdate = useForceUpdate();

  if (isFirstCall) {
    state = initialValue;
    isFirstCall = false;
  }

  const setState = (next) => {
    state = next;
    forceUpdate();
  };

  return [state, setState];
}
