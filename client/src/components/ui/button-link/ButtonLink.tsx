import { REGISTER_ROUTE } from 'constants/consts-routes';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface IButtonLink {
  text: string;
  width?: number;
}

const ButtonLink: FC<IButtonLink> = ({ text, width = 300 }) => {
  return (
    <Link to={REGISTER_ROUTE}>
      <button
        className="text-white text-[20px] font-bold px-14 py-6 rounded-round bg-gradient hover:bg-hoverGradient w-full"
        style={{ maxWidth: `${width}px` }}
      >
        {text}
      </button>
    </Link>
  );
};

export default ButtonLink;
