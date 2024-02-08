import Container from 'components/container/Container';
import ButtonSubmit from 'components/ui/button-submit/ButtonSubmit';
import Input from 'components/ui/input/Input';
import { IContactFormData } from 'interfaces/interfaces';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import feedbackServices from 'services/feedback.services';

const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<IContactFormData>({
    mode: 'onBlur',
  });

  const onSubmitForm: SubmitHandler<IContactFormData> = data => {
    toast.promise(
      feedbackServices.send(data.email, data.username, data.message),
      {
        pending: 'Отправка данных',
        error: 'Ошибка отправки данных!',
      },
    );
    reset();
  };

  return (
    <Container width={750}>
      <h2>Drop us a line</h2>
      <p className="text-center text-grey text-[30px] mb-[79px]">
        We will contact you as soon as possible
      </p>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="flex gap-5 flex-col text-[20px]"
      >
        <Input
          type="email"
          label="Email"
          name="email"
          placeholder="mail@example.com"
          register={register}
          errors={errors}
          rules={{
            required: 'Введите email пользователя',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Введите корректный email адрес',
            },
          }}
        />
        <Input
          label="Username"
          name="username"
          placeholder="John Smith"
          register={register}
          errors={errors}
          rules={{
            required: 'Введите имя пользователя',
            minLength: {
              value: 5,
              message: 'Минимальная длина имени пользователя 5 символов',
            },
            maxLength: {
              value: 20,
              message:
                'Длина имени пользователя не должна превышать 20 символов',
            },
          }}
        />
        <label htmlFor="message">
          <textarea
            className="bg-whiteInput rounded-roundArea p-10 min-h-[273px] max-h-[720px] w-full"
            style={{
              border: `1px solid ${errors['message'] ? 'red' : 'transparent'}`,
            }}
            cols={30}
            placeholder="Message"
            maxLength={1900}
            {...register('message', {
              required: 'Это поле не должно быть пустым',
            })}
          />
        </label>
        {errors['message'] && (
          <p className="text-end text-[red]">{errors['message'].message}</p>
        )}
        <div className="flex justify-between items-center">
          <span className="text-grey text-[18px]">
            We do not share your personal data
          </span>
          <ButtonSubmit text="Subscribe" disabled={!isValid} />
        </div>
      </form>
    </Container>
  );
};

export default ContactForm;
