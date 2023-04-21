import { StyledResult } from "./styled";

export const Result = ({ result }) => (
  <StyledResult>
    {!!result && (
      <strong>
        {result.targetAmount.toFixed(2)} {result.currency}
      </strong>
    )}
  </StyledResult>
);

export default Result;
