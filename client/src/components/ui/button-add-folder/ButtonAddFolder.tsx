import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { FC } from 'react';
import useFileStore from 'store/file.store';

const ButtonAddFolder: FC = () => {
  const isShowPopup = useFileStore(state => state.isShowPopup);
  const setIsShowPopup = useFileStore(state => state.setIsShowPopup);
  return (
    <button
      className="bg-[#F04438] hover:bg-[#d96860] text-white font-bold uppercase rounded-[5px] max-w-[145px] w-full p-2"
      onClick={() => setIsShowPopup(!isShowPopup)}
    >
      <AddCircleOutlineIcon />
      <span className="ml-1">Add Folder</span>
    </button>
  );
};

export default ButtonAddFolder;
