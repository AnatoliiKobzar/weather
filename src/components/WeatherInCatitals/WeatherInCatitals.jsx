import { useState } from 'react';
import { getCurrentWeather } from 'services/weatherAPI';

const WeatherInCapitals = () => {
  // const capitals = [
  //   'Amsterdam',
  //   'Athens',
  // 'Belgrade',
  // 'Berlin',
  // 'Bern',
  // 'Bratislava',
  // 'Brussels',
  // 'Bucharest',
  // 'Budapest',
  // 'Copenhagen',
  // 'Dublin',
  // 'Helsinki',
  // 'Kyiv',
  // 'Lisbon',
  // 'London',
  // 'Madrid',
  // 'Nicosia',
  // 'Oslo',
  // 'Paris',
  // 'Podgorica',
  // 'Prague',
  // 'Reykjavik',
  // 'Riga',
  // 'Rome',
  // 'San Marino',
  // 'Sofia',
  // 'Stockholm',
  // 'Tallinn',
  // 'Vienna',
  // 'Warsaw',
  // 'Vilnius',
  // 'Zagreb',
  // ];

  // const [weather, setWeather] = useState([]);

  // capitals.map(capital =>
  //   getCurrentWeather(capital).then(resp => console.log(resp))
  // );

  return <div>Capitals</div>;
};

export default WeatherInCapitals;
