import Weather from 'components/CurrentWeather/CurrentWeather';

const Home = ({ changeCurrentCity }) => {
  return (
    <div>
      <Weather changeCurrentCity={changeCurrentCity} />
    </div>
  );
};

export default Home;
