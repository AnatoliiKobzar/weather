import { useLocation } from 'react-router-dom';
import { Link, Nav } from './Navigation.styled';

const Navigation = () => {
  const location = useLocation();

  return (
    <Nav>
      <Link to="/">Current weather</Link>
      <Link state={{ from: location }} to="/future_weather">
        Weather in 5 days
      </Link>
    </Nav>
  );
};

export default Navigation;
