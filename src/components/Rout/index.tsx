import { Route, Routes } from 'react-router';
import Home from '../../pages/Home';
import Analytics from '../../pages/Analytics';
import Revenue from '../../pages/Revenue';
import Crm from '../../pages/Crm';
import Apps from '../../pages/Apps';

const Rout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/revenue" element={<Revenue />} />
      <Route path="/crm" element={<Crm />} />
      <Route path="/apps" element={<Apps />} />
    </Routes>
  );
};

export default Rout;
