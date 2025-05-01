import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisisble, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisisble && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
      <Button color="warning" onClick={() => setAlertVisibility(true)}>
        Bbbbbuton
      </Button>
    </div>
  );
}

export default App;
