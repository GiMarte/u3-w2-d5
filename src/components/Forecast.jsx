import { useState } from "react";
import { Link } from "react-router-dom";

const Forecast = () => {
  const [city, setCity] = useState("Milan");
  const [intCode, setIntCode] = useState("IT"); //codice nazionale
  const [type, setType] = useState("forecast"); //weather or forecast
  const [forecast, setForecast] = useState({});

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
      setForecast(result);
    } catch (error) {
      console.log(error);
    }
  };
  const days = [8, 16, 24, 32, 39];
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col col-12 col-md-5 d-flex justify-content-center">
          <div className="card glass-card">
            <div className="card-body d-flex flex-column gap-2 align-items-center">
              <h5 className="card-title hero-title">
                Trova il tempo! (del futuro)
              </h5>
              <div className="card-text text-center">
                <label htmlFor="citta">Citta'?</label>
                <input
                  placeholder="Milan"
                  type="text"
                  id="citta"
                  className="modern-input"
                  onChange={(e) => setCity(e.target.value.toUpperCase())}
                />
                <br />
                <label htmlFor="code-naz">Codice Nazione?</label>
                <input
                  placeholder="IT"
                  type="text"
                  id="code-naz"
                  className="modern-input"
                  onChange={(e) => setIntCode(e.target.value.toUpperCase())}
                />
                <button onClick={getData}>Cerca!</button>
              </div>
              <Link to="/" className="torna">
                Torna indietro
              </Link>
            </div>
            <div>
              <Link to="/meteo">Oppure vuoi tornare al presente?</Link>
            </div>
          </div>
        </div>
        <div className="col col-12 col-md-7">
          <div className="card h-100 ">
            <div className="card-body">
              {forecast.list &&
                days.map((i) => {
                  const d = forecast.list[i];
                  const iconURL = `https://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`;
                  const date = new Date(d.dt_txt);
                  const day = date.getDay();
                  const data = date.getDate();
                  const giorni = [
                    "Domenica",
                    "Lunedi",
                    "Martedi",
                    "Mercoledi",
                    "Giovedi",
                    "Venerdi",
                    "Sabato",
                  ];
                  return (
                    <div className="weather-card" key={i++}>
                      <div className="weather-header">
                        <h2>{forecast.city.name}</h2>
                        <h2>
                          {giorni[day]} {data}
                        </h2>
                        <img src={iconURL} />
                      </div>

                      <div className="weather-temp">{d.main.temp}°C</div>
                      <div className="weather-desc">
                        {d.weather[0].description}
                      </div>
                      <div className="weather-info">
                        <div>💧 {d.main.humidity}%</div>
                        <div>💨 {d.wind.speed} m/s</div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
