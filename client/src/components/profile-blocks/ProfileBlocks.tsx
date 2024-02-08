import { FC } from 'react';
import useUserStore from 'store/user.store';
import ProfileBlock from './profile-block/ProfileBlock';

const ProfileBlocks: FC = () => {
  const user = useUserStore(state => state.currentUser);
  return (
    <ul className="flex justify-center gap-5">
      <ProfileBlock
        id={1}
        text="Disk space"
        info={`${user?.diskSpace} gb`}
        url="../../../images/profiles/crown1.svg"
      />
      <ProfileBlock
        id={2}
        text="Used space"
        info={`${user?.usedSpace} gb`}
        url="../../../images/profiles/calendar.svg"
      />
      <ProfileBlock
        id={3}
        text="File stored total"
        info={`${user?.filedStoredTotal} gb`}
        url="../../../images/profiles/storage.svg"
      />
    </ul>
  );
};

export default ProfileBlocks;
