import { ListItem } from './Capital.styled';

const Capital = ({ country, capital }) => {
  return (
    <ListItem>
      <h2>{capital}</h2>
      <p>{country}</p>
    </ListItem>
  );
};

export default Capital;
