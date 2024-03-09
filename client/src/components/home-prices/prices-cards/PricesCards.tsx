import AnimationWrapper from 'components/ui/animation-wrapper/AnimationWrapper';
import ButtonLink from 'components/ui/button-link/ButtonLink';
import { colors } from 'constants/colors.ts';
import { FC } from 'react';
import { FaCheck } from 'react-icons/fa';
import useUserStore from 'store/user.store';
import styles from './PricesCards.module.scss';
import { cardLeftInfo, cardMainInfo, cardRightInfo } from './data';
const PricesCards: FC = () => {
  const isAuth = useUserStore(state => state.isAuth);

  return (
    <div className={styles.cards}>
      <AnimationWrapper args={{ rotate: 45, x: -500 }}>
        <div className={styles.cardLeft}>
          <p className="text-text text-5xl font-bold mb-10">
            {cardLeftInfo.days} дней
          </p>
          <p className="text-[64px] text-primary mb-[100px]">
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
      </AnimationWrapper>
      <AnimationWrapper args={{ scale: 0.5 }}>
        <div className={styles.cardMain}>
          <span className="inline-block text-green mb-3">Популярный</span>
          <p className="text-text text-5xl font-bold mb-10">
            {cardMainInfo.days} дней
          </p>
          <p className="text-[64px] text-primary mb-[100px]">
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
      </AnimationWrapper>
      <AnimationWrapper args={{ rotate: -45, x: 500 }}>
        <div className={styles.cardRight}>
          <p className="text-text text-5xl font-bold mb-10">
            {cardRightInfo.days} дней
          </p>
          <p className="text-[64px] text-primary mb-[100px]">
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
      </AnimationWrapper>
    </div>
  );
};
export default PricesCards;
