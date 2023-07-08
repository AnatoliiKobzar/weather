import Capitals from 'pages/Capitals';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="capitals" element={<Capitals />} />
      </Route>
    </Routes>
  );
};

export default App;
