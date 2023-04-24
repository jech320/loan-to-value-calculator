import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
//enums
import { CircularProgress } from '@mui/material';
//styles
import styles from './GuestRoute.module.scss';

const GuestRoute: FC = () => {
  return (
    <Suspense fallback={<CircularProgress className={styles.spinner} />}>
      <Outlet />
    </Suspense>
  );
};

export default GuestRoute;
