import ButtonLink from 'components/ui/button-link/ButtonLink';
import { FC } from 'react';
import useUserStore from 'store/user.store';

const HeaderHomePreviewInfo: FC = () => {
  const isAuth = useUserStore(state => state.isAuth);
  return (
    <div className="text-title max-w-[515px] sm:max-w-full sm:text-center md:text-center md:max-w-full lg:text-center lg:max-w-full xl:max-w-full xl:text-center">
      <h1 className="text-title text-[60px] font-black font-['Roboto'] uppercase leading-[70px] mb-4 sm:text-[35px] sm:leading-10 md:leading-[40px] md:text-[35px] lg:leading-[45px] lg:text-[40px] xl:text-[50px]">
        Для личного и коммерческого использования
      </h1>
      <p className="text-2xl font-['Montserrat'] uppercase leading-9 tracking-[8px] mb-8">
        Облачное хранилище
      </p>
      <hr className="w-full mb-11" />
      <h2 className="text-[26px] font-medium font-['Roboto'] uppercase leading-10 mb-3">
        Храните файлы и управляйте ими
      </h2>
      <p className="text-lg font-normal font-['Montserrat'] leading-7 tracking-wider mb-6 xl:text-center">
        Загружайте несколько файлов одновременно и сохраняйте их навсегда на
        этом сайте. Если вы используете FireFox или Chrome, вы можете просто
        перетащить свои файлы, чтобы начать загрузку
      </p>
      <ButtonLink text={isAuth ? 'Перейти в профиль' : 'Начать пользоваться'} />
    </div>
  );
};

export default HeaderHomePreviewInfo;
