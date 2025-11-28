import { Card, Container, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Meteo = () => {
  const [city, setCity] = useState("Milan");
  const [intCode, setIntCode] = useState("IT"); //codice nazionale
  const [type, setType] = useState("weather"); //weather or forecast
  const [meteo, setMeteo] = useState({});

  const getData = async () => {
    const URL = `https://api.openweathermap.org/data/2.5/${type}?q=${city},${intCode}&appid=20d953af10a803887ab8b64e07a4293f&units=metric`;
    try {
      const response = await fetch(URL);
      if (!response.ok)
        throw new Error(
          `Non sono riuscito a prendere i dati: ${alert(
            `Non ho trovato nulla!: error ${response.status}`
          )}`
        );
      const result = await response.json();
      console.log(result);
      setMeteo(result);
    } catch (error) {
      console.log(error);
    }
  };

  const iconURL = meteo.weather
    ? `https://openweathermap.org/img/wn/${meteo.weather[0].icon}@2x.png`
    : "";

  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col col-12 col-md-5 d-flex justify-content-center">
          <div className="card glass-card">
            <div className="card-body d-flex flex-column justify-content-center gap-2 align-items-center">
              <h5 className="card-title hero-title">Trova il tempo!</h5>
              <div className="card-text text-center">
                <label htmlFor="citta">Citta'?</label>
                <input
                  required
                  placeholder="Milan"
                  type="text"
                  id="citta"
                  className="modern-input"
                  onChange={(e) => setCity(e.target.value.toUpperCase())}
                />
                <br />
                <label htmlFor="code-naz">Codice Nazione?</label>
                <input
                  required
                  placeholder="IT"
                  type="text"
                  id="code-naz"
                  className="modern-input"
                  onChange={(e) => setIntCode(e.target.value.toUpperCase())}
                />
                <button onClick={getData}>CERCA!</button>
              </div>
              <Link to="/" className="torna">
                Torna indietro
              </Link>
            </div>
          </div>
        </div>
        <div className="col col-12 col-md-7">
          <div className="card h-100 ">
            <div className="card-body">
              {meteo.main && (
                <div className="weather-card d-flex justify-content-center align-items-center h-100 flex-column gap-3">
                  <div className="weather-header">
                    <h2>{meteo.name}</h2>
                    <img src={iconURL} />
                  </div>

                  <div className="weather-temp">{meteo.main.temp}°C</div>
                  <div className="weather-desc">
                    {meteo.weather[0].description}
                  </div>

                  <div className="weather-info">
                    <div>💧 Umidità: {meteo.main.humidity}%</div>
                    <div>💨 Vento: {meteo.wind.speed} m/s</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meteo;
