import { HOME_ROUTE } from 'constants/consts-routes';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Logo: FC = () => {
  return (
    <div className="flex flex-auto text-4xl uppercase">
      <Link to={HOME_ROUTE}>skybox</Link>
    </div>
  );
};

export default Logo;
