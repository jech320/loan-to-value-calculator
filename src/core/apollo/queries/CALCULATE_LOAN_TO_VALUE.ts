import { gql } from '../__generated__';

const CALCULATE_LOAN_TO_VALUE = gql(`
  query CalculateLoanToValue($depositValue: Int!, $purchasePrice: Int!) {
    loanToValueCalc(
      depositValue: $depositValue
      purchasePrice: $purchasePrice
    ) {
      result
    }
  }
`);

export default CALCULATE_LOAN_TO_VALUE;
