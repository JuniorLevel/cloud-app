import { FC } from 'react';
import styles from './ContactSection.module.scss';
import ContactForm from './contact-form/ContactForm';
import ContactMap from './contact-map/ContactMap';
const ContactSection: FC = () => {
  return (
    <section className={styles.contactSection}>
      <ContactMap />
      <ContactForm />
    </section>
  );
};

export default ContactSection;
