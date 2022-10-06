import { useState } from "./hooks/useState";

export default function UsernameInput() {
  const [username, setUsername] = useState("김동구");

  const onChnage = (event) => {
    setUsername(event.target.value);
  };

  return <input value={username} onChange={onChnage} />;
}
