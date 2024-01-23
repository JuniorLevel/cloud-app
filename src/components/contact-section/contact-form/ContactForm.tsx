import Container from 'components/container/Container';
import ButtonSubmit from 'components/ui/button-submit/ButtonSubmit';
import Input from 'components/ui/input/Input';
import { FC } from 'react';

const ContactForm: FC = () => {
  return (
    <Container width={750}>
      <h2>Drop us a line</h2>
      <p className="text-center text-grey text-[30px] mb-[79px]">
        We will contact you as soon as possible
      </p>
      <form className="flex gap-5 flex-col text-[20px]">
        <Input text="Email:" name="email" placeholder="mail@example.com" />
        <Input text="Name:" name="name" placeholder="John Doe" />
        <label htmlFor="message">
          <textarea
            name="message"
            className="bg-whiteInput rounded-roundArea p-10 min-h-[273px] max-h-[720px] w-full"
            cols={30}
            placeholder="Message"
            maxLength={1900}
          ></textarea>
        </label>
        <div className="flex justify-between items-center">
          <span className="text-grey text-[18px]">
            We do not share your personal data
          </span>
          <ButtonSubmit text="Subscribe" />
        </div>
      </form>
    </Container>
  );
};

export default ContactForm;
