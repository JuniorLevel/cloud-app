import Container from 'components/container/Container';
import AnimationScrollWrapper from 'components/ui/animation-scroll-wrapper/AnimationScrollWrapper';
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
      <AnimationScrollWrapper args={{ x: 1000 }}>
        <h2 className="sm:text-[20px]">Свяжитесь с нами</h2>
      </AnimationScrollWrapper>
      <p className="text-center text-grey text-[30px] mb-[79px] sm:text-[18px]">
        Ответим Вам в ближайшее время
      </p>
      <AnimationScrollWrapper args={{ y: -150, scale: 0.5 }}>
        <div className="mx-auto  md:max-w-[500px] lg:max-w-[500px]">
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
              label="Имя"
              name="username"
              placeholder="Иван Смирнов"
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
            <span className="text-center hidden sm:block sm:text-start">
              Сообщение:
            </span>
            <label htmlFor="message">
              <textarea
                className="bg-whiteInput rounded-roundArea p-10 min-h-[273px] max-h-[720px] w-full"
                style={{
                  border: `1px solid ${
                    errors['message'] ? 'red' : 'transparent'
                  }`,
                }}
                cols={30}
                placeholder="Текст"
                maxLength={1900}
                {...register('message', {
                  required: 'Это поле не должно быть пустым',
                })}
              />
            </label>
            {errors['message'] && (
              <p className="text-end text-[red] sm:text-start text-[15px]">
                {errors['message'].message}
              </p>
            )}
            <div className="flex justify-between items-center sm:flex-col sm:text-center gap-4">
              <span className="text-grey text-[14px]">
                Мы не передаем ваши персональные данные
              </span>
              <ButtonSubmit text="Отправить" disabled={!isValid} />
            </div>
          </form>
        </div>
      </AnimationScrollWrapper>
    </Container>
  );
};

export default ContactForm;
