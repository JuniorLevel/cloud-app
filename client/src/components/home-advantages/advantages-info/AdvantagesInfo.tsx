import { FC } from 'react';
import styles from './AdvantagesInfo.module.scss';
import { data } from './data.ts';
const AdvantagesInfo: FC = () => {
  return (
    <ul className={styles.advantages}>
      {data.map(item => (
        <li key={item.id} className="flex items-center gap-7">
          <div className={styles.advantagesIcon}>
            <item.icon size={50} color="#FFFFFF" />
          </div>
          <div>
            <h3 className="text-4xl text-title font-normal font-['Roboto'] uppercase tracking-wider mb-2">
              {item.title}
            </h3>
            <p className="text-lg font-normal font-['Montserrat']">
              {item.text}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AdvantagesInfo;
