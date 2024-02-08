import { FC } from 'react';
import useUserStore from 'store/user.store';
import styles from './ProfileInfo.module.scss';
const ProfileInfo: FC = () => {
  const user = useUserStore(state => state.currentUser);
  return (
    <>
      <div className="mx-auto min-w-[350px] min-h-[350px] max-w-[350px] max-h-[350px] w-full h-full mb-8">
        <img
          className="rounded-[50%]"
          src="../../../images/profiles/profile-img.jpg"
          alt="profile-img"
        />
      </div>
      <table className={styles.profileInfo}>
        <tbody className="border">
          <tr>
            <td>Your username</td>
            <td>{user?.username}</td>
          </tr>
          <tr>
            <td>Your email</td>
            <td>{user?.email}</td>
          </tr>
          <tr>
            <td>Your age</td>
            <td>{user?.age}</td>
          </tr>
          <tr>
            <td>Your gender</td>
            <td>{user?.gender}</td>
          </tr>
          <tr>
            <td>Account was created</td>
            <td>{user?.createdAt.slice(0, 10).replaceAll('-', '.')}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ProfileInfo;
