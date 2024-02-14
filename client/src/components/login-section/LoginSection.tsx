import Container from 'components/container/Container';
import ButtonSubmit from 'components/ui/button-submit/ButtonSubmit';
import ContentText from 'components/ui/content-text/ContentText';
import Input from 'components/ui/input/Input';
import Title from 'components/ui/title/Title';
import { REGISTER_ROUTE } from 'constants/consts-routes';
import { ILoginFormData } from 'interfaces/interfaces';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useUserStore from 'store/user.store';
import styles from './LoginSection.module.scss';
const LoginSection: FC = () => {
  const login = useUserStore(state => state.login);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ILoginFormData>({
    mode: 'onBlur',
  });

  const onSubmitForm: SubmitHandler<ILoginFormData> = data => {
    toast.promise(login(data.email, data.password), {
      pending: 'Идёт процесс авторизации',
      error: 'Ошибка авторизации!',
    });
    reset();
  };

  return (
    <section className={styles.login}>
      <Container width={800}>
        <Title text="Login" />
        <ContentText />
        <form onSubmit={handleSubmit(onSubmitForm)}>
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
            <Link to={REGISTER_ROUTE}>
              <p className="hover:text-primary">Do not have account?</p>
            </Link>
            <ButtonSubmit text="Login" disabled={!isValid} />
          </div>
        </form>
      </Container>
    </section>
  );
};

export default LoginSection;
