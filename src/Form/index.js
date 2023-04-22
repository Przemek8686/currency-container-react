import { useState } from "react";
import currencies from "../currencies";
import Result from "../Result";
import {
  StyledForm,
  Fieldset,
  Label,
  LabelText,
  Input,
  Select,
  Button,
  LabelTextResult,
} from "./styled";

const Form = ({ result, calculateResult }) => {
  const [currency, setCurrency] = useState(currencies[0].name);
  const [amount, setAmount] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Label>
          <LabelText> Amount in PLN* </LabelText>
          <Input
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            className="form__field"
            type="number"
            min="0.1"
            step="any"
            name="amount"
            required
          />
        </Label>
        <Label>
          <LabelText>I want to exchange for:</LabelText>
          <Select
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
            className="form__field"
            name="currency"
          >
            {currencies.map((currency) => (
              <option key={currency.name} value={currency.name}>
                {currency.name}
              </option>
            ))}
          </Select>
        </Label>
        <Label>
          <Button>{"calculate".toUpperCase()}</Button>
        </Label>
        <LabelTextResult>Result:</LabelTextResult>
        <Result result={result} />
      </Fieldset>
    </StyledForm>
  );
};

export default Form;
