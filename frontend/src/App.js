import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/hello")
      .then((res) => res.json())
      .then((data) => console.log("resposta do backend", data))
      .catch((err) => console.error(err));
  }, []);

  return <div>{message}</div>;
}

export default App;
