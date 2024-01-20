import Container from 'components/container/Container';
import { FC } from 'react';
import styles from './HomeStatistics.module.scss';
const HomeStatistics: FC = () => {
  return (
    <section className={styles.statistics}>
      <Container width={1200}>
        <div className="flex justify-between items-center font-['Comfortaa'] font-bold">
          <div className="flex gap-5 items-center">
            <div>
              <img
                src="/public/images/home/icons/Icon-upload.svg"
                alt="icon-upload"
              />
            </div>
            <div>
              <p className="text-[42px] text-title mb-5">999529 000 000</p>
              <p className="text-[24px] text-secondary">
                Загружено файлов на сервис
              </p>
            </div>
          </div>
          <div>
            <div className="flex gap-5 items-center">
              <div>
                <img
                  src="/public/images/home/icons/Icon-add-user.svg"
                  alt="icon-add-user"
                />
              </div>
              <div>
                <p className="text-[42px] text-title mb-5">235 764 784</p>
                <p className="text-[24px] text-secondary">
                  Зарегистрировано пользователей
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeStatistics;
