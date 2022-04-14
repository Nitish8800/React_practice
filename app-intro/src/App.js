import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [userDetails, setUserDetails] = useState(0);

  const user = async () => {
    try {
      const userDetail = await axios.get("https://randomuser.me/api/");

      setUserDetails(userDetail.data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(userDetails);
  useEffect(() => {
    user();
  }, []);

  return (
    <div className="App">
      {userDetails && <img src={userDetails.picture.large} alt="" />}
    </div>
  );
}

export default App;
