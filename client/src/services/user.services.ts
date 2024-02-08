interface IRegistrationResponse {
  message: string;
}

class UserServices {
  private URL: string;
  constructor() {
    this.URL = 'http://localhost:5000/auth';
  }

  // async registration(
  //   username: string,
  //   age: string | number,
  //   gender: string,
  //   email: string,
  //   password: string,
  // ) {
  //   try {
  //     const res: AxiosResponse<IRegistrationResponse> = await axios.post(
  //       `${this.URL}/reg`,
  //       {
  //         username,
  //         age,
  //         gender,
  //         email,
  //         password,
  //       },
  //     );
  //     toast.success(`${res.data.message}!`, {
  //       position: 'bottom-right',
  //     });
  //   } catch (err) {
  //     if (axios.isAxiosError(err)) {
  //       const axiosError: AxiosError = err;
  //       toast.error(`${axiosError.message}!`, {
  //         position: 'bottom-right',
  //       });
  //     } else {
  //       throw new Error('Ошибка при отправке данных. Повторите попытку...');
  //     }
  //   }
  // }

  // async login(email: string, password: string) {
  //   try {
  //     const res = await axios.post(`${this.URL}/login`, {
  //       email,
  //       password,
  //     });
  //     localStorage.setItem('token', res.data.token);
  //     console.log(res.data);
  //   } catch (err) {
  //     if (axios.isAxiosError(err)) {
  //       const axiosError: AxiosError = err.response?.data.message;
  //       console.log(axiosError);
  //     } else {
  //       throw new Error('Ошибка при отправке данных. Повторите попытку...');
  //     }
  //   }
  // }
}

export default new UserServices();
