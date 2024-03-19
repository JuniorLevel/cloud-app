import { FC } from 'react';
import styles from './AdvantagesImage.module.scss';
const AdvantagesImage: FC = () => {
  return (
    <div className={styles.image}>
      <img src="/images/home/CLOUD.png" alt="cloud-png" />
    </div>
  );
};

export default AdvantagesImage;
