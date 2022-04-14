import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

  const user = async () => {
    try {
      const userDetails = await axios.get("https://randomuser.me/api/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, []);

  return <div className="App">{count}</div>;
}

export default App;
