import {
  CONTACT_ROUTE,
  FAQ_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  NOT_FOUND_ROUTE,
  PRICING_ROUTE,
  REGISTER_ROUTE,
} from 'constants/consts-routes.ts';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import Faq from './pages/Faq/Faq';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Pricing from './pages/Pricing/Pricing';
import Register from './pages/Register/Register';

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home />}></Route>
      <Route path={PRICING_ROUTE} element={<Pricing />}></Route>
      <Route path={CONTACT_ROUTE} element={<Contact />}></Route>
      <Route path={FAQ_ROUTE} element={<Faq />}></Route>
      <Route path={LOGIN_ROUTE} element={<Login />}></Route>
      <Route path={REGISTER_ROUTE} element={<Register />}></Route>
      <Route path={NOT_FOUND_ROUTE} element={<NotFound />}></Route>
    </Routes>
  );
};

export default AppRouter;
