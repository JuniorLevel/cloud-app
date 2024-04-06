import ButtonLink from 'components/ui/button-link/ButtonLink';
import { colors } from 'constants/colors';
import { FC } from 'react';
import { FaCheck } from 'react-icons/fa';
import Slider from 'react-slick';
import useUserStore from 'store/user.store';
import {
  cardLeftInfo,
  cardMainInfo,
  cardRightInfo,
} from '../prices-cards/data';
import styles from './PricesCardsSlider.module.scss';
const PricesCardsSlider: FC = () => {
  const isAuth = useUserStore(state => state.isAuth);
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings} className="xl-min:hidden block">
      <div className={styles.cardLeft}>
        <p className="text-text text-5xl font-bold mb-10 sm:text-[40px]">
          {cardLeftInfo.days} дней
        </p>
        <p className="text-[64px] text-primary mb-[100px] sm:text-[40px]">
          {cardLeftInfo.price}₽
        </p>
        <hr className="text-[#8080806e] mb-20" />
        <ul>
          {cardLeftInfo.description.map(item => (
            <div key={item} className="flex justify-between">
              <li>{item}</li>
              <FaCheck className="ml-[25px]" size={25} color={colors.green} />
            </div>
          ))}
        </ul>
      </div>
      <div className={styles.cardMain}>
        <span className="inline-block text-green mb-3">Популярный</span>
        <p className="text-text text-5xl font-bold mb-10 sm:text-[40px]">
          {cardMainInfo.days} дней
        </p>
        <p className="text-[64px] text-primary mb-[50px] sm:text-[40px]">
          {cardMainInfo.price}₽
        </p>
        <hr className="text-[#8080806e] mb-20" />
        <ul>
          {cardMainInfo.description.map(item => (
            <div key={item} className="flex justify-between">
              <li>{item}</li>
              <FaCheck className="ml-[25px]" size={25} color={colors.green} />
            </div>
          ))}
        </ul>
        <ButtonLink text={isAuth ? 'Профиль' : 'Войти'} />
      </div>
      <div className={styles.cardRight}>
        <p className="text-text text-5xl font-bold mb-10 sm:text-[40px]">
          {cardRightInfo.days} дней
        </p>
        <p className="text-[64px] text-primary mb-[100px] sm:text-[40px]">
          {cardRightInfo.price}₽
        </p>
        <hr className="text-[#8080806e] mb-20" />
        <ul>
          {cardRightInfo.description.map(item => (
            <div key={item} className="flex justify-between">
              <li>{item}</li>
              <FaCheck className="ml-[25px]" size={25} color={colors.green} />
            </div>
          ))}
        </ul>
      </div>
    </Slider>
  );
};

export default PricesCardsSlider;
