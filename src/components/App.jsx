import DetailsWeather from 'pages/DetailsWeather';
import Home from 'pages/Home';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const App = () => {
  const [city, setCity] = useState(null);

  const changeCurrentCity = currentCity => {
    setCity(currentCity);
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home changeCurrentCity={changeCurrentCity} />} />
        <Route path="future_weather" element={<DetailsWeather city={city} />} />
      </Route>
    </Routes>
  );
};

export default App;
