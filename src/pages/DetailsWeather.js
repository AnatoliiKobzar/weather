import FutureWeather from 'components/FutureWeather/FutureWeather';

const DetailsWeather = ({ city }) => {
  return (
    <div>
      <FutureWeather city={city} />
    </div>
  );
};

export default DetailsWeather;
