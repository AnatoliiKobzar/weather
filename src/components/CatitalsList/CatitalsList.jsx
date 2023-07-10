import capitals from '../../data/capitals';
import Capital from 'components/Capital/Capital';
import { nanoid } from 'nanoid';
import { List } from './CapitalList.styled';

const sortCapitals = capitals.sort((a, b) => (a.capital > b.capital ? 1 : -1));

const CapitalsList = () => {
  return (
    <List>
      {sortCapitals.map(({ country, capital, photo }) => (
        <Capital
          key={nanoid()}
          country={country}
          capital={capital}
          photo={photo}
        />
      ))}
    </List>
  );
};

export default CapitalsList;
