import "./App.css";
import { useState } from "react";
import Primarybtn from "./Primarybtn";
import MainInput from "./MainInput";

const App = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <MainInput set={setName} />
      <br />
      {name}
      {name === "Go" ? (
        <Primarybtn fullname="go to the next page" />
      ) : (
        <Primarybtn fullname="Submit" />
      )}
    </div>
  );
};

export default App;
