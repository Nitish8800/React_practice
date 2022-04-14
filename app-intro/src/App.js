import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [singleCountry, setSingleCountry] = useState("");
  const [cities, setCities] = useState(null);
  const [singleCity, setSingleCity] = useState("");
  const [submit, setSubmit] = useState(false);

  const fetchCountries = async () => {
    try {
      const country = await axios.get(
        "https://countriesnow.space/api/v0.1/countries"
      );
      setCountries(country.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCities = (country) => {
    setSubmit(false);
    setSingleCity(null);

    setSingleCountry(country);
    const findCities = countries.find((c) => c.country === country);
    setCities(findCities.cities);
  };

  const submitHandle = () => {
    if (singleCountry && singleCity) {
      setSubmit(true);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="App">
      <div className="App-header">

<h1>
  Select Your Hometown
</h1>      
<div>
  <select name="" id="">


    
  </select>
</div>


      </div>
    </div>
  );
}

export default App;
