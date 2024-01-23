import Container from 'components/container/Container';
import Layout from 'components/layout/Layout';
import Title from 'components/ui/title/Title';
import { FC } from 'react';

const NotFound: FC = () => {
  return (
    <Layout>
      <Container width={1600}>
        <section className="mt-[60px]">
          <Title text="Error 404" />
          <p className="text-center text-[65px] text-title mt-10">
            Page not found or was deleted!
          </p>
        </section>
      </Container>
    </Layout>
  );
};

export default NotFound;
