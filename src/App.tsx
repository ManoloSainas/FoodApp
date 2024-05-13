// import { useEffect, useState } from "react";
import "./App.css";
import { Stack } from "./Components/Stack/Stack";
// import { Text } from "./Components/Text/Text";
import { Image } from "./Components/Image/Image";

function App() {
  // const [count, setCount] = useState(0);

  // useEffect
  //useCallback
  // useMemo

  return (
    <Stack>
      <Image
        imageURL="../src/assets/Images/food.jpg"
        width={200}
        height={200}
        borderRadius={100}
      />
    </Stack>
  );
}

export default App;
