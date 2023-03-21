import { Link, Nav } from './Navigation.styled';

const Navigation = () => {
  return (
    <Nav>
      <Link to="/">Current weather</Link>
      <Link to="/future_weather">Weather in 5 days</Link>
    </Nav>
  );
};

export default Navigation;
