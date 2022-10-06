import { resetCursor, useState } from "./hooks/useState";

export default function LoginForm() {
  resetCursor();

  const [username, setUsername] = useState("김동구");
  const [password, setPassword] = useState("");

  const onChangeUsername = (event) => {
    setUsername(event.currentTarget.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };

  return (
    <form>
      <input value={username} onChange={onChangeUsername} />
      <input value={password} onChange={onChangePassword} />
    </form>
  );
}
