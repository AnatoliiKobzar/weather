import Capitals from 'pages/Capitals';
import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="capitals" element={<Capitals />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
