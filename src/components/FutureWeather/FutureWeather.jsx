import { useEffect, useState } from 'react';
import { getWeatherIn5Days } from 'services/weatherAPI';
import { Desc, SliderItem, SliderWrap, WrapFut } from './FutureWeather.styled';

const FutureWeather = ({ city }) => {
  const settings = {
    slidesToShow: 7,
    slidesToScroll: 4,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          vertical: true,
          verticalSwiping: true,
        },
      },
    ],
  };

  const [date, setDate] = useState('');
  const [name, setName] = useState('');

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
        <Desc>Weather in 5 days</Desc>
      </WrapFut>
      <SliderWrap {...settings}>
        {date.map(item => (
          <SliderItem key={item.dt}>
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
          </SliderItem>
        ))}
      </SliderWrap>
    </div>
  );
};

export default FutureWeather;
