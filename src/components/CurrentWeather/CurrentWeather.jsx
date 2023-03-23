import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getCurrentWeather } from 'services/weatherAPI';
import { Button, Form, Input, Section, Wrapper } from './CurrentWeather.styled';

const Weather = ({ changeCurrentCity }) => {
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('');
  const [main, setMain] = useState('');
  const [temp, setTemp] = useState('');
  const [humidity, setHumidity] = useState('');
  const [wind, setWind] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }

    changeCurrentCity(query);

    getCurrentWeather(query).then(resp => {
      setName(resp.name);
      setIcon(resp.weather[0].icon);
      setMain(resp.weather[0].description);
      setTemp(Number(resp.main.temp));
      setHumidity(resp.main.humidity);
      setWind(resp.wind.speed);
    });

    return () => {
      changeCurrentCity(null);
    };
  }, [changeCurrentCity, query]);

  const handelCitySearch = event => {
    event.preventDefault();
    setSearchParams({ query: event.target.city.value });
  };

  return (
    <Section>
      <Form onSubmit={handelCitySearch}>
        <Input type="text" name="city" placeholder="Enter your city" />
        <Button type="submit">Search</Button>
      </Form>
      {query && (
        <Wrapper>
          <h2>{name}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={`${icon}`}
          />
          <p>{main.charAt(0).toUpperCase() + main.slice(1)}</p>
          <p>Temp: {Math.round(temp)}&#8451;</p>
          <p>Humidity: {humidity}%</p>
          <p>Wind speed: {wind}m/c</p>
        </Wrapper>
      )}
    </Section>
  );
};

export default Weather;
