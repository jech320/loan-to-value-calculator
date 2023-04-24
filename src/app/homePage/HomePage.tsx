import H from '../../shared/components/H';
import { LoanToValueForm } from './components/LoanToValueForm';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <header>
        <H variant="h3">Loan to Value Calculator</H>
      </header>
      <LoanToValueForm />
    </div>
  );
};

export default HomePage;
