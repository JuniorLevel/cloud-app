import {
  CONTACT_ROUTE,
  FAQ_ROUTE,
  FILES_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  NOT_FOUND_ROUTE,
  PRICING_ROUTE,
  PROFILE_ROUTE,
  REGISTER_ROUTE,
} from 'constants/consts-routes.ts';
import { FC, useEffect, useRef } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import useUserStore from 'store/user.store';
import Contact from './pages/Contact/Contact';
import Faq from './pages/Faq/Faq';
import Files from './pages/Files/Files';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import PageLoader from './pages/PageLoader/PageLoader';
import Pricing from './pages/Pricing/Pricing';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';

const AppRouter: FC = () => {
  const isAuth = useUserStore(state => state.isAuth);
  const isLoading = useUserStore(state => state.isLoading);
  const auth = useUserStore(state => state.auth);
  const navigate = useNavigate();
  const hasExecutedEffectRef = useRef(false);

  useEffect(() => {
    let delayAuth: ReturnType<typeof setTimeout>;
    if (!hasExecutedEffectRef.current) {
      delayAuth = setTimeout(() => {
        auth();
      }, 700);
    } else {
      hasExecutedEffectRef.current = true;
    }
    return () => clearTimeout(delayAuth);
  }, [auth]);

  useEffect(() => {
    if (!isAuth) {
      navigate(HOME_ROUTE);
    } else {
      navigate(FILES_ROUTE);
    }
  }, [isAuth]);

  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />}></Route>
          <Route path={PROFILE_ROUTE} element={<Profile />}></Route>
          <Route path={FILES_ROUTE} element={<Files />}></Route>
          <Route path={PRICING_ROUTE} element={<Pricing />}></Route>
          <Route path={CONTACT_ROUTE} element={<Contact />}></Route>
          <Route path={FAQ_ROUTE} element={<Faq />}></Route>
          <Route path={LOGIN_ROUTE} element={<Login />}></Route>
          <Route path={REGISTER_ROUTE} element={<Register />}></Route>
          <Route path={NOT_FOUND_ROUTE} element={<NotFound />}></Route>
        </Routes>
      )}
    </>
  );
};

export default AppRouter;
