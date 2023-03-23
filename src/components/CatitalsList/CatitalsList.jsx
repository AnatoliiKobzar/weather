import capitals from '../../data/capitals';
import Capital from 'components/Capital/Capital';
import { nanoid } from 'nanoid';
import { List } from './CapitalList.styled';

const CapitalsList = () => {
  return (
    <List>
      {capitals.map(({ country, capital }) => (
        <Capital key={nanoid()} country={country} capital={capital} />
      ))}
    </List>
  );
};

export default CapitalsList;
