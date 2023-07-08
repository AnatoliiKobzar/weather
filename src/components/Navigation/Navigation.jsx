import { Link, Nav } from './Navigation.styled';

const Navigation = () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/capitals">Capitals</Link>
    </Nav>
  );
};

export default Navigation;
