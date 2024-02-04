import { IProfileBlockData } from 'interfaces/interfaces';
import { FC } from 'react';
import styles from './ProfileBlock.module.scss';

const ProfileBlock: FC<IProfileBlockData> = ({ id, text, info, url }) => {
  return (
    <li className="flex items-center max-w-[310px] w-full p-2 gap-5 border-solid border-2 border-[rgba(0,0,0,.1)] rounded-[10px]">
      <div className={styles.profileBlock}>
        <img src={url} alt={`img-${id}`} />
      </div>
      <div>
        <p className="text-pink text-[20px] uppercase font-bold mb-2">{text}</p>
        <p className="text-[15px] uppercase font-[500] mb-2">{info}</p>
      </div>
    </li>
  );
};

export default ProfileBlock;
