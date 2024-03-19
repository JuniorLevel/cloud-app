import Container from 'components/container/Container';
import AnimationWrapper from 'components/ui/animation-wrapper/AnimationWrapper';
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
        <AnimationWrapper args={{ x: -50, rotate: 5 }}>
          <Title text="Вопросы" />
          <ContentText />
        </AnimationWrapper>
        <AnimationWrapper>
          <ul>
            {accordionData.map(item => (
              <li key={item.id}>
                <AccordionItem title={item.title} info={item.info} />
              </li>
            ))}
          </ul>
        </AnimationWrapper>
      </Container>
    </section>
  );
};

export default FaqAccordion;
