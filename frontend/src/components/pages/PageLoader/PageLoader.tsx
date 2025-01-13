import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { FC } from 'react';

const PageLoader: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'black',
      }}
    >
      <p className="text-[white] text-xl mr-10">Загрузка страницы</p>
      <CircularProgress color="secondary" />
    </Box>
  );
};

export default PageLoader;
