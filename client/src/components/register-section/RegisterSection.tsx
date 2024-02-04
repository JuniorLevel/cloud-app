import Container from 'components/container/Container';
import ButtonSubmit from 'components/ui/button-submit/ButtonSubmit';
import ContentText from 'components/ui/content-text/ContentText';
import Input from 'components/ui/input/Input';
import Title from 'components/ui/title/Title';
import { LOGIN_ROUTE } from 'constants/consts-routes';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import useUserStore from 'store/user.store';
import styles from './RegisterSection.module.scss';
const RegisterSection: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const registration = useUserStore(state => state.registration);

  return (
    <section className={styles.register}>
      <Container width={800}>
        <Title text="Register" />
        <ContentText />
        <form>
          <div className="mb-4">
            <Input
              name="username"
              text="Username"
              placeholder="John Smith"
              type="text"
              value={username}
              callback={e => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <Input
              name="age"
              text="Age"
              placeholder="Your age"
              type="number"
              value={age}
              callback={e => setAge(e.target.value)}
            />
          </div>
          <div className="mt-8 mb-8">
            <label htmlFor="gender" className="flex gap-10 text-[20px]">
              <span>Male</span>
              <input
                name="gender"
                type="radio"
                value="male"
                checked={gender === 'male'}
                onChange={e => setGender(e.target.value)}
              />
              <span>Female</span>
              <input
                name="gender"
                type="radio"
                value="female"
                checked={gender === 'female'}
                onChange={e => setGender(e.target.value)}
              />
            </label>
          </div>
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
            <Link to={LOGIN_ROUTE}>
              <p className="hover:text-primary">Do you have account?</p>
            </Link>
            <ButtonSubmit
              text="Register"
              callback={e => {
                e.preventDefault();
                registration(username, age, gender, email, password);
              }}
            />
          </div>
        </form>
      </Container>
    </section>
  );
};

export default RegisterSection;
