import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

function SearchBox({updateInfo}) {
  const [city, setCity] = React.useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "4bf758f11f65f3210424294b8b4d613f";

  let getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let data = await response.json();
    let results= {
      name: data.name,
      temp: data.main.temp,
      temp_max: data.main.temp_max,
      temp_min: data.main.temp_min,
      humidity: data.main.humidity,
      feels_like: data.main.feels_like,
      pressure: data.main.pressure,
      weather: data.weather[0].description,
    }
    console.log(results)
    return results;
  };

  let handleChange =  (event) => {
    setCity(event.target.value);
  };
  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
  };
  return (
    <>
      <div className="SearchBox">
        <h1>Search for the Weather</h1>
        <form>
          <TextField
            id="city"
            label="City Name"
            variant="outlined"
            required
            value={city}
            onChange={handleChange}
            
          />
          <br />
          <br />
          <Button variant="contained" type="submit" onClick={handleSubmit}>
            Search
          </Button>
        </form>
      
      </div>
    </>
  );
}

export default SearchBox;
