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
    title: 'SAFE AND SECURE',
    text: 'Safely store and backup all your essential files. From family photos & videos to important documents, you can rely on us to store all your media securely and forever.',
    icon: RiSecurePaymentLine,
  },
  {
    id: 2,
    title: 'Access from anywhere',
    text: 'Easily access your files from anywhere with desktop apps for Windows and Mac, and mobile apps for iPhone, iPad, Android, and the web.',
    icon: SiMicrosoftaccess,
  },
  {
    id: 3,
    title: 'STORE AND MANAGE ALL YOUR FILES!',
    text: 'Upload multiple files at once and keep them forever on this site. If you are using FireFox or Chrome, you can simply drag & drop your files to begin uploading.',
    icon: MdOutlineManageHistory,
  },
  {
    id: 4,
    title: 'Any point of the globe',
    text: 'High speed from any location with internet access! Gigabit networking and high-performance server!',
    icon: IoMdSpeedometer,
  },
];
