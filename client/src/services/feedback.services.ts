import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

interface IFeedbackResponse {
  message: string;
}

class FeedbackServices {
  private URL: string;
  constructor() {
    this.URL = 'http://localhost:5000/contact';
  }

  async send(email: string, username: string, message: string) {
    try {
      const res: AxiosResponse<IFeedbackResponse> = await axios.post(
        `${this.URL}/form`,
        {
          email,
          username,
          message,
        },
      );
      toast.success(`${res.data.message}!`, {
        position: 'bottom-right',
      });
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const axiosError: AxiosError = err;
        toast.error(`${axiosError.message}!`, {
          position: 'bottom-right',
        });
      } else {
        throw new Error('Ошибка при отправке данных. Повторите попытку...');
      }
    }
  }
}

export default new FeedbackServices();
