import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import Routeree from "./Router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routeree />
    </>
  );
}

export default App;
