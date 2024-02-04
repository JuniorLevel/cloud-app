import ButtonLink from 'components/ui/button-link/ButtonLink';
import { colors } from 'constants/colors.ts';
import { FC } from 'react';
import { FaCheck } from 'react-icons/fa';
import styles from './PricesCards.module.scss';
import { cardLeftInfo, cardMainInfo, cardRightInfo } from './data';
const PricesCards: FC = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.cardLeft}>
        <div>
          <p className="text-text text-5xl font-bold mb-10">
            {cardLeftInfo.days} days
          </p>
          <p className="text-[64px] text-primary mb-[100px]">
            ${cardLeftInfo.price}
          </p>
          <hr className="text-[#8080806e] mb-20" />
          <ul>
            {cardLeftInfo.description.map(item => (
              <div key={item} className="flex justify-between">
                <li>{item}</li>
                <FaCheck size={25} color={colors.green} />
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.cardMain}>
        <div>
          <span className="inline-block text-green mb-3">Most popular</span>
          <p className="text-text text-5xl font-bold mb-10">
            {cardMainInfo.days} days
          </p>
          <p className="text-[64px] text-primary mb-[100px]">
            ${cardMainInfo.price}
          </p>
          <hr className="text-[#8080806e] mb-20" />
          <ul>
            {cardMainInfo.description.map(item => (
              <div key={item} className="flex justify-between">
                <li>{item}</li>
                <FaCheck size={25} color={colors.green} />
              </div>
            ))}
          </ul>
          <ButtonLink text="Sign in" />
        </div>
      </div>
      <div className={styles.cardRight}>
        <div>
          <p className="text-text text-5xl font-bold mb-10">
            {cardRightInfo.days} days
          </p>
          <p className="text-[64px] text-primary mb-[100px]">
            ${cardRightInfo.price}
          </p>
          <hr className="text-[#8080806e] mb-20" />
          <ul>
            {cardRightInfo.description.map(item => (
              <div key={item} className="flex justify-between">
                <li>{item}</li>
                <FaCheck size={25} color={colors.green} />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default PricesCards;
