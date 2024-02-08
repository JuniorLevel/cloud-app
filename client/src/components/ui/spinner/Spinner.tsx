import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './Spinner.module.scss';
export default function CircularIndeterminate() {
  return (
    <div className={styles.spinner}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          minHeight: '100vh',
        }}
      >
        <p className="text-xl mr-10">Загрузка страницы</p>
        <CircularProgress color="secondary" />
      </Box>
    </div>
  );
}
