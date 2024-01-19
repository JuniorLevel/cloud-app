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
          <p>{cardLeftInfo.days}</p>
          <p>{cardLeftInfo.price}</p>
          <hr />
          <ul>
            {cardLeftInfo.description.map(item => (
              <div key={item} className="flex justify-between items-center">
                <li>{item}</li>
                <FaCheck size={25} color={colors.green} />
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.cardMain}>
        <div>
          <span className="text-green">Most popular</span>
          <p>{cardMainInfo.days}</p>
          <p>{cardMainInfo.price}</p>
          <hr />
          <ul>
            {cardMainInfo.description.map(item => (
              <div key={item} className="flex justify-between items-center">
                <li>{item}</li>
                <FaCheck size={25} color={colors.green} />
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.cardRight}>
        <div>
          <p>{cardRightInfo.days}</p>
          <p>{cardRightInfo.price}</p>
          <hr />
          <ul>
            {cardRightInfo.description.map(item => (
              <div key={item} className="flex justify-between items-center">
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
