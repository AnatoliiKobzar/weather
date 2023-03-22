import { useEffect, useState } from 'react';
import { getWeatherIn5Days } from 'services/weatherAPI';
import { useLocation, useNavigate } from 'react-router-dom';
import { Desc, SliderWrap, WrapFut } from './FutureWeather.styled';
import { Button } from 'components/CurrentWeather/CurrentWeather.styled';

const FutureWeather = ({ city }) => {
  const settings = {
    className: 'center',
    infinite: false,
    centerPadding: '60px',
    slidesToShow: 7,
    swipeToSlide: true,
    slidesToScroll: 2,
  };

  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handelGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  useEffect(() => {
    if (!city) {
      return;
    }
    getWeatherIn5Days(city).then(resp => {
      setDate(resp.list);
      setName(resp.city.name);
    });
  }, [city]);

  if (!date) {
    return;
  }

  return (
    <div>
      <WrapFut>
        <h2>{name}</h2>
        <Button type="button" onClick={handelGoBack}>
          Go back
        </Button>
      </WrapFut>
      <Desc>Weather in 5 days</Desc>

      <SliderWrap {...settings}>
        {date.map(item => (
          <div key={item.dt}>
            <p>{item.dt_txt.slice(0, -3)}</p>
            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt={`${item.weather[0].icon}`}
            />
            <p>
              {item.weather[0].description.charAt(0).toUpperCase() +
                item.weather[0].description.slice(1)}
            </p>
            <p>Temp: {Math.round(Number(item.main.temp))}&#8451;</p>
          </div>
        ))}
      </SliderWrap>
    </div>
  );
};

export default FutureWeather;
