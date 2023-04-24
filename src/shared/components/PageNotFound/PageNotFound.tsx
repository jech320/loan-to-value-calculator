import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
//enums
import { RoutesEnum } from '../../enums/RoutesEnum';
//components
import H from '../H';
import P from '../P';
//styles
import styles from './PageNotFound.module.scss';

const PageNotFound: FC = () => {
  return (
    <div className={styles.container}>
      <H variant="h1" className={styles.notFoundTitle}>
        404
      </H>
      <P variant="intro" className={styles.notFoundDescription}>
        Page not found
      </P>
      <P className={styles.notFoundMessage}>
        The page you are looking for doesn't exist
      </P>
      <Button
        component={Link}
        to={RoutesEnum.HOME}
        variant="outlined"
        className={styles.homeBtn}
      >
        Go to Home
      </Button>
    </div>
  );
};

export default PageNotFound;
