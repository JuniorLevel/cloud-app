import Container from 'components/container/Container';
import ContentText from 'components/ui/content-text/ContentText';
import Title from 'components/ui/title/Title';
import { FC } from 'react';
import styles from './FilesSection.module.scss';
const FilesSection: FC = () => {
  return (
    <section className={styles.filesSection}>
      <Container width={1200}>
        <Title text="My Files" />
        <ContentText />
      </Container>
    </section>
  );
};

export default FilesSection;
