import { useEffect, useState } from "react";
import "./App.css";
import { Stack } from "./Components/Stack/Stack";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount("hdjdjdj");
  }, []);
  //useCallback
  // useMemo
  return (
    <Stack>
      <h1>FoodApp</h1>
    </Stack>
  );
}

export default App;
