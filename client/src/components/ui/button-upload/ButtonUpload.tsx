import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { FC } from 'react';

const VisuallyHiddenInput = styled('input')({
  clipPath: 'inset(50%)',
  width: 1,
});

const ButtonUpload: FC = () => {
  return (
    <Button
      component="label"
      variant="contained"
      startIcon={<CloudUploadIcon />}
    >
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button>
  );
};

export default ButtonUpload;
