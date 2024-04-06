import { IconType } from 'react-icons';
import { IoMdSpeedometer } from 'react-icons/io';
import { MdOutlineManageHistory } from 'react-icons/md';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { SiMicrosoftaccess } from 'react-icons/si';
interface IData {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const data: IData[] = [
  {
    id: 1,
    title: 'БЕЗОПАСНЫЙ И ЗАЩИЩЕННЫЙ',
    text: 'Надежно храните и создавайте резервные копии всех ваших важных файлов. От семейных фотографий и видео до важных документов - вы можете положиться на нас в том, что мы сохраним все ваши носители надежно и навсегда.',
    icon: RiSecurePaymentLine,
  },
  {
    id: 2,
    title: 'Доступ из любого места',
    text: 'Легко получайте доступ к своим файлам из любого места с помощью настольных приложений для Windows и Mac, а также мобильных приложений для iPhone, iPad, Android и Интернета.',
    icon: SiMicrosoftaccess,
  },
  {
    id: 3,
    title: 'ХРАНИТЕ ВАШИ ФАЙЛЫ И УПРАВЛЯЙТЕ ИМИ',
    text: 'Загружайте несколько файлов одновременно и сохраняйте их навсегда на этом сайте. Если вы используете FireFox или Chrome, вы можете просто перетащить свои файлы, чтобы начать загрузку.',
    icon: MdOutlineManageHistory,
  },
  {
    id: 4,
    title: 'В любой точке земного шара',
    text: 'Высокая скорость загрузки файлов из любого места с доступом в Интернет! Гигабитная сеть и высокопроизводительный сервер.',
    icon: IoMdSpeedometer,
  },
];
