import "./App.css";
import { Button } from "./Components/Button/Button";
// import { Icon } from "./Components/Icon/Icon";

import { Stack } from "./Components/Stack/Stack";

function App() {
  // const [count, setCount] = useState(0);
  // useEffect
  //useCallback
  // useMemo

  return (
    <Stack>
      <Button backgroundColor="red" borderRadius={50}>
        Click me
      </Button>
    </Stack>
  );
}

export default App;
