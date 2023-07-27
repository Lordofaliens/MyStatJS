import React, { useState } from "react";
import { Counter } from "./components/Counter";
import { Users } from "./components/Users";
import { MainContextProvider } from "./contexts/MainContext";
import { Posts } from "./components/Posts";

import "./App.css";

function App() {
  const [a, setA] = useState(100000000);
  return (
    <div className="App">
      <MainContextProvider a={10}>
        {/* props */}
        <Counter
          value="VALUE"
          name="Igor"
          age={10}
          arr={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          fn={() => console.log("Hello")}
          abc={a}
          setA={setA}
        />
        <Users />
        <Posts />
      </MainContextProvider>
    </div>
  );
}

export default App;
