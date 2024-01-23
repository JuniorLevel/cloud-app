import Container from 'components/container/Container';
import ContentText from 'components/ui/content-text/ContentText';
import Title from 'components/ui/title/Title';
import { FC } from 'react';
import styles from './FaqAccordion.module.scss';
import { accordionData } from './accordion.data';
import AccordionItem from './accordion/Accordion';
const FaqAccordion: FC = () => {
  return (
    <section className={styles.faqAccordion}>
      <Container width={1200}>
        <Title text="FAQ"></Title>
        <ContentText />
        <ul>
          {accordionData.map(item => (
            <li key={item.id}>
              <AccordionItem title={item.title} info={item.info} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default FaqAccordion;
