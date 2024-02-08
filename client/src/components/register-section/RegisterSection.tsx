import Container from 'components/container/Container';
import ButtonSubmit from 'components/ui/button-submit/ButtonSubmit';
import ContentText from 'components/ui/content-text/ContentText';
import Input from 'components/ui/input/Input';
import Title from 'components/ui/title/Title';
import { LOGIN_ROUTE } from 'constants/consts-routes';
import { IRegisterFormData } from 'interfaces/interfaces';
import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useUserStore from 'store/user.store';
import styles from './RegisterSection.module.scss';

const RegisterSection: FC = () => {
  const registration = useUserStore(state => state.registration);
  const isReg = useUserStore(state => state.isReg);
  const navigate = useNavigate();

  useEffect(() => {
    if (isReg) navigate(LOGIN_ROUTE);
  }, [isReg]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<IRegisterFormData>({
    mode: 'onBlur',
  });

  const onSubmitForm: SubmitHandler<IRegisterFormData> = data => {
    toast.promise(
      registration(
        data.username,
        data.age,
        data.gender,
        data.email,
        data.password,
      ),
      {
        pending: 'Отправка данных',
        error: 'Ошибка отправки данных!',
      },
    );
    reset();
  };

  return (
    <section className={styles.register}>
      <Container width={800}>
        <Title text="Register" />
        <ContentText />
        <form onSubmit={handleSubmit(onSubmitForm)}>
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
          <div className="mb-10">
            <label htmlFor="gender" className="flex gap-10 text-[20px]">
              <span>Male</span>
              <input
                type="radio"
                value="male"
                {...register('gender', {
                  required: 'Выберите пол пользователя',
                })}
              />
              <span>Female</span>
              <input
                type="radio"
                value="female"
                {...register('gender', {
                  required: 'Выберите пол пользователя',
                })}
              />
            </label>
            {errors['gender'] && (
              <p className="text-end text-[red] mb-8">
                {errors['gender'].message}
              </p>
            )}
          </div>
          <Input
            type="number"
            label="Age"
            name="age"
            placeholder="Your age"
            register={register}
            errors={errors}
            rules={{
              required: 'Введите возраст пользователя',
              min: {
                value: 12,
                message: `Минимальный возраст пользователя 12 лет`,
              },
              max: {
                value: 99,
                message: 'Введите значение не более 99ти',
              },
            }}
          />
          <Input
            name="password"
            label="Password"
            placeholder="***********"
            type="password"
            register={register}
            errors={errors}
            rules={{
              required: 'Введите пароль пользователя',
              minLength: {
                value: 8,
                message: `Минимальная длина пароля 8 символов`,
              },
              maxLength: {
                value: 20,
                message: 'Максимальная длина пароля 20 символов',
              },
            }}
          />
          <div className="flex justify-between items-center">
            <Link to={LOGIN_ROUTE}>
              <p className="hover:text-primary">Do you have account?</p>
            </Link>
            <ButtonSubmit text="Register" disabled={!isValid} />
          </div>
        </form>
      </Container>
    </section>
  );
};

export default RegisterSection;
