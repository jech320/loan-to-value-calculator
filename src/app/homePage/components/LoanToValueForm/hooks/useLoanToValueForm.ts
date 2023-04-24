import { FormikHelpers } from 'formik';
import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client/react';
import { ILoanToFormValues } from '../interfaces';
import CALCULATE_LOAN_TO_VALUE from '../../../../../core/apollo/queries/CALCULATE_LOAN_TO_VALUE';

const useLoanToValueForm = () => {
  const [
    calculateLoanToValue,
    { loading: isSubmitting, error: queryError, data },
  ] = useLazyQuery(CALCULATE_LOAN_TO_VALUE);

  const [result, setResult] = useState<typeof data>(undefined);
  const [error, setError] = useState<typeof queryError>(undefined);

  useEffect(() => {
    setResult(data);
    setError(queryError);
  }, [isSubmitting]);

  const handleReset = () => {
    setResult(undefined);
    setError(undefined);
  };

  const handleSubmit = (
    values: ILoanToFormValues,
    _: FormikHelpers<ILoanToFormValues>
  ) => {
    calculateLoanToValue({ variables: values });
  };

  return { isSubmitting, error, result, handleSubmit, handleReset };
};

export default useLoanToValueForm;
