import { LOGIN_ROUTE, REGISTER_ROUTE } from 'constants/consts-routes';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const GuestPanel: FC = () => {
  return (
    <div className="flex items-center gap-[50px] font-[500] text-xl">
      <Link to={LOGIN_ROUTE}>
        <div className="duration-500 transition hover:text-title">LOGIN</div>
      </Link>
      <Link to={REGISTER_ROUTE}>
        <div className="text-pink bg-white py-3 px-10 rounded-round duration-500 transition hover:bg-pink hover:text-white">
          SIGN UP
        </div>
      </Link>
    </div>
  );
};

export default GuestPanel;
