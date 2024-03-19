import Container from 'components/container/Container';
import Layout from 'components/layout/Layout';
import Title from 'components/ui/title/Title';
import { FC } from 'react';

const NotFound: FC = () => {
  return (
    <Layout>
      <Container width={1600}>
        <section className="sm:mt-0 md:mt-0 lg:mt-0 mt-[60px]">
          <Title text="Ошибка 404" />
          <p className="text-center text-[65px] text-title mt-10 sm:text-[18px] md:text-[30px] lg:text-[30px] xl:text-[40px]">
            Страница не найдена или была удалена!
          </p>
        </section>
      </Container>
    </Layout>
  );
};

export default NotFound;
