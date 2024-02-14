import { GridCloseIcon } from '@mui/x-data-grid';
import { FC, useEffect, useState } from 'react';
import useFileStore from 'store/file.store';
import styles from './CreateFolderPopup.module.scss';
const CreateFolderPopup: FC = () => {
  const isShowPopup = useFileStore(state => state.isShowPopup);
  const setIsShowPopup = useFileStore(state => state.setIsShowPopup);
  const currentDirectory = useFileStore(state => state.currentDirectory);
  const createDirectory = useFileStore(state => state.createDirectory);

  const [nameFolder, setNameFolder] = useState('');

  useEffect(() => {
    if (isShowPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    setNameFolder('');
  }, [isShowPopup]);

  return (
    <div
      className={styles.popup}
      onClick={() => setIsShowPopup(!isShowPopup)}
      style={{ display: `${isShowPopup ? 'flex' : 'none'}` }}
    >
      <div className={styles.popup__body} onClick={e => e.stopPropagation()}>
        <div className={styles.popup__bodyHeader}>
          <p>Create Folder</p>
          <div
            className="bg-grey rounded-round p-1"
            onClick={() => setIsShowPopup(!isShowPopup)}
          >
            <GridCloseIcon fontSize="large" />
          </div>
        </div>
        <div className={styles.popup__bodyMain}>
          <div className="mb-5">
            <label htmlFor="nameFolder">
              <p>Folder Name</p>
              <input
                id="nameFolder"
                maxLength={40}
                type="text"
                value={nameFolder}
                onChange={e => setNameFolder(e.target.value)}
              />
            </label>
          </div>
        </div>
        <button
          disabled={!nameFolder.length}
          onClick={() => {
            createDirectory(currentDirectory, nameFolder);
            setIsShowPopup(!isShowPopup);
          }}
        >
          Create Folder
        </button>
      </div>
    </div>
  );
};

export default CreateFolderPopup;
