import { useForceUpdate } from "./useForceUpdate";

const states = [];
const called = [];
let cursor = 0;

export function resetCursor() {
  cursor = 0;
}

export function useState(initialValue) {
  const forceUpdate = useForceUpdate();

  if (!called[cursor]) {
    states[cursor] = initialValue;
    called[cursor] = true;
  }

  const getSetState = (cursor) => (next) => {
    states[cursor] = next;
    forceUpdate();
  };

  const state = states[cursor];
  const setState = getSetState(cursor);

  cursor++;

  return [state, setState];
}
