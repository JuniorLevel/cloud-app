import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { FC } from 'react';
import useFileStore from 'store/file.store';

const VisuallyHiddenInput = styled('input')({
  clipPath: 'inset(50%)',
  width: 1,
});

const ButtonUpload: FC = () => {
  const currentDirectory = useFileStore(state => state.currentDirectory);
  const uploadFile = useFileStore(state => state.uploadFile);
  return (
    <Button
      component="label"
      variant="contained"
      startIcon={<CloudUploadIcon />}
    >
      Загрузить файл
      <VisuallyHiddenInput
        multiple
        type="file"
        onChange={e => {
          const files = e.target.files;
          if (files) {
            const filesArray = Array.from(files);
            filesArray.forEach(file => {
              uploadFile(file, currentDirectory);
            });
          }
        }}
      />
    </Button>
  );
};

export default ButtonUpload;
