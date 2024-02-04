import axios, { AxiosResponse } from 'axios';

interface IRegistrationResponse {
  message: string;
}

class UserServices {
  private URL: string;
  constructor() {
    this.URL = 'http://localhost:5000/auth';
  }

  async registration(
    username: string,
    age: string | number,
    gender: string,
    email: string,
    password: string,
  ) {
    try {
      const res: AxiosResponse<IRegistrationResponse> = await axios.post(
        `${this.URL}/reg`,
        {
          username,
          age,
          gender,
          email,
          password,
        },
      );
      alert(res.data.message);
    } catch (err: any) {
      alert(err.message);
    }
  }

  async login(email: string, password: string) {
    try {
      const res = await axios.post(`${this.URL}/login`, {
        email,
        password,
      });
      localStorage.setItem('token', res.data.token);
      console.log(res.data);
    } catch (err: any) {
      console.log(err.response.data.message);
    }
  }
}

export default new UserServices();
