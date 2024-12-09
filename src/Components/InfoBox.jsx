import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1674739697985-19a8d37fb9ec?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const HOT_URL =
    "https://media.istockphoto.com/id/824845572/photo/thermometer-sun-high-degres-hot-summer-day-high-summer-temperatures.webp?a=1&b=1&s=612x612&w=0&k=20&c=DPDwtq156djUSKSd57TR23BmU4vzC8xqolwMkqHCdfU=";
  const COLD_URL =
    "https://media.istockphoto.com/id/160840799/photo/icicles-and-snowstorm.webp?a=1&b=1&s=612x612&w=0&k=20&c=2HCnfJ8Cpe1EF1pSW15UsUC3ZwpPhbkv7A30pisf_iw=";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1718917911443-7034b4f9455f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  return (
    <>
      <div className="infoBox">
        <div className="cardInfo">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={
                info.humidity > 80
                  ? RAIN_URL
                  : info.temp > 15
                  ? HOT_URL
                  : COLD_URL
              }
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.name}
                {info.humidity > 80
                  ? <ThunderstormIcon/>
                  : info.temp > 15
                  ? <WbSunnyIcon />
                  : <AcUnitIcon /> }
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary" }}
                component={"span"}
              >
                <div style={{ margin: "10px" }}>
                  Temperature = {info.temp}&deg;C
                </div>
                <div style={{ margin: "10px" }}>
                  Humidity = {info.humidity}%
                </div>
                <div style={{ margin: "10px" }}>
                  Max Temperature = {info.temp_max}&deg;C
                </div>
                <div style={{ margin: "10px" }}>
                  Min Temperature = {info.temp_min}&deg;C
                </div>
                <div style={{ margin: "10px" }}>
                  Pressure = {info.pressure}hPa
                </div>
                <div style={{ margin: "10px" }}>
                  The Weather can be decribed as <b>{info.weather}</b> and Feels
                  Like = {info.feels_like}&deg;C
                </div>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default InfoBox;
