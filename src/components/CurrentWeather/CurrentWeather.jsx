import { useState } from 'react';
import { Button, Form, Input, Section } from './CurrentWeather.styled';

import WeatherCard from 'components/WeatherCard/WeatherCard';

const Weather = () => {
  const [city, setCity] = useState(null);

  const handelCitySearch = event => {
    event.preventDefault();
    setCity(event.target.city.value);
  };

  return (
    <Section>
      <Form onSubmit={handelCitySearch}>
        <Input type="text" name="city" placeholder="Enter your city" />
        <Button type="submit">Search</Button>
      </Form>
      {city && <WeatherCard city={city} />}
    </Section>
  );
};

export default Weather;
