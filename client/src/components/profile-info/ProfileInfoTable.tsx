import { FC } from 'react';
import useUserStore from 'store/user.store';
import styles from './ProfileInfoTable.module.scss';
const ProfileInfoTable: FC = () => {
  const user = useUserStore(state => state.currentUser);
  return (
    <table className={styles.profileInfoTable}>
      <tbody className="border">
        <tr>
          <td>Имя пользователя</td>
          <td>{user?.username}</td>
        </tr>
        <tr>
          <td>Email пользователя</td>
          <td>{user?.email}</td>
        </tr>
        <tr>
          <td>Возраст пользователя</td>
          <td>{user?.age}</td>
        </tr>
        <tr>
          <td>Пол</td>
          <td>{user?.gender}</td>
        </tr>
        <tr>
          <td>Дата регистрации</td>
          <td>{user?.createdAt.slice(0, 10).replaceAll('-', '.')}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProfileInfoTable;
