import AddCircleOutlineIcon from '@mui/icons-material/AddCircle';
import { FC } from 'react';
import useFileStore from 'store/file.store';

const ButtonAddFolder: FC = () => {
  const isShowPopup = useFileStore(state => state.isShowPopup);
  const setIsShowPopup = useFileStore(state => state.setIsShowPopup);
  return (
    <button
      className="bg-[#F04438] hover:bg-[#d96860] text-white font-bold uppercase rounded-[5px] max-w-[200px] w-full py-2 px-2 flex items-center sm:text-[12px] sm:px-1 sm:max-w-[155px]"
      onClick={() => setIsShowPopup(!isShowPopup)}
    >
      <AddCircleOutlineIcon />
      <span className="ml-1">Создать папку</span>
    </button>
  );
};

export default ButtonAddFolder;
