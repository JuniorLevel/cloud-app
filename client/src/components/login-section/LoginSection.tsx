import Container from 'components/container/Container';
import ButtonSubmit from 'components/ui/button-submit/ButtonSubmit';
import ContentText from 'components/ui/content-text/ContentText';
import Input from 'components/ui/input/Input';
import Title from 'components/ui/title/Title';
import { REGISTER_ROUTE } from 'constants/consts-routes';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import useUserStore from 'store/user.store';
import styles from './LoginSection.module.scss';
const LoginSection: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useUserStore(state => state.login);

  return (
    <section className={styles.login}>
      <Container width={800}>
        <Title text="Login" />
        <ContentText />
        <form>
          <div className="mb-4">
            <Input
              name="email"
              text="Email"
              placeholder="mail@example.com"
              type="email"
              value={email}
              callback={e => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <Input
              name="password"
              text="Password"
              placeholder="***********"
              type="password"
              value={password}
              callback={e => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center">
            <Link to={REGISTER_ROUTE}>
              <p className="hover:text-primary">Do not have account?</p>
            </Link>
            <ButtonSubmit
              text="Login"
              callback={e => {
                e.preventDefault();
                login(email, password);
              }}
            />
          </div>
        </form>
      </Container>
    </section>
  );
};

export default LoginSection;
