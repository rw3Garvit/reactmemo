import { useCallback, useState } from "react";
import "./App.css";
import Test from "./components/Test";

function App() {
  let [count, setCount] = useState(0);

  let [data, setData] = useState("garvit");

  let print = useCallback(() => {
    console.log("print called");
    // setData([{ name: "user" }]);
  }, [data]);

  return (
    <div className="App">
      <Test data={data} print={print} />

      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>

      <button onClick={() => setData("user")}>Change Data</button>
    </div>
  );
}

export default App;
