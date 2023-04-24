import { FC } from 'react';
import { Alert, Button, InputAdornment, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import CalculateIcon from '@mui/icons-material/Calculate';
import { Formik, Form } from 'formik';
import { number, object } from 'yup';
import { EMPTY_LOAN_TO_VALUE_FORM_VALUES } from './constants';
import styles from './LoanToValueForm.module.scss';
import useLoanToValueForm from './hooks/useLoanToValueForm';
import H from '../../../../shared/components/H';

const LoanToValueForm: FC = () => {
  const { isSubmitting, error, result, handleSubmit, handleReset } =
    useLoanToValueForm();

  const validationSchema = object().shape({
    depositValue: number().min(0, 'Deposit value cannot be lower than 0'),
    purchasePrice: number().moreThan(
      0,
      'Purchase price should be greater than 0'
    ),
  });

  return (
    <Formik
      initialValues={EMPTY_LOAN_TO_VALUE_FORM_VALUES}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnBlur={true}
      enableReinitialize
    >
      {(formikPropValues) => {
        const {
          isValid,
          handleChange,
          dirty,
          handleBlur,
          handleReset: handleFormReset,
          errors,
          touched,
          values,
        } = formikPropValues;

        return (
          <Form
            className={styles.container}
            onChange={() => {
              handleReset();
            }}
          >
            <TextField
              classes={{ root: styles.inputRoot }}
              error={touched.depositValue && !!errors.depositValue}
              name="depositValue"
              label="Deposit Value"
              type="number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              InputLabelProps={{
                shrink: true,
              }}
              helperText={touched.depositValue ? errors.depositValue : ''}
              value={values.depositValue}
              onChange={handleChange}
              inputProps={{
                onBlur: handleBlur,
              }}
            />
            <TextField
              classes={{ root: styles.inputRoot }}
              error={touched.purchasePrice && !!errors.purchasePrice}
              name="purchasePrice"
              label="Purchase Price"
              type="number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              InputLabelProps={{
                shrink: true,
              }}
              helperText={touched.purchasePrice ? errors.purchasePrice : ''}
              value={values.purchasePrice}
              onChange={handleChange}
              inputProps={{
                onBlur: handleBlur,
              }}
            />
            {dirty && (!!result || !!error) && (
              <div className={styles.resultContainer}>
                {!!result && (
                  <>
                    <H variant="h5">Result Value:</H>
                    <H variant="h4">{result.loanToValueCalc?.result}</H>
                  </>
                )}
                {!!error && <Alert severity="error">{error.message}</Alert>}
              </div>
            )}
            <footer className={styles.footer}>
              <Button
                variant="outlined"
                startIcon={<RestartAltIcon />}
                onClick={() => {
                  handleReset();
                  handleFormReset();
                }}
                disabled={!dirty || isSubmitting}
              >
                Clear
              </Button>
              <LoadingButton
                variant="outlined"
                type="submit"
                disabled={!dirty || !isValid}
                startIcon={<CalculateIcon />}
                loading={isSubmitting}
              >
                Submit
              </LoadingButton>
            </footer>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoanToValueForm;
