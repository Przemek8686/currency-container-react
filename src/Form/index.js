import { useState } from "react";
import { useRatesData } from "./useRatesData";
import { Result } from "../Result";
import {
  StyledForm,
  Fieldset,
  Label,
  LabelText,
  Input,
  Select,
  Button,
  LabelTextResult,
  Loading,
  Miss,
  Info,
} from "./styled";

export const Form = () => {
  const [result, setResult] = useState();
  const ratesData = useRatesData();
  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  const calculateResult = (amount, currency) => {
    const rate = ratesData.rates[currency];

    setResult({
      targetAmount: amount * rate,
      currency,
    })
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      {ratesData.state === "loading" ? (
        <Loading>Prosze czekac, ładujemy kursy walut.</Loading>
      ) : ratesData.state === "error" ? (
        <Miss>
          Bład, sprawdz połaczenie z internetem, lub sprobuj ponownie.
        </Miss>
      ) : (
        <>
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
                onChange={({ target }) => setCurrency(target.value)}>
                {Object.keys(ratesData.rates).map((currency) => {
                  return (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  );
                })}
              </Select>
            </Label>
            <Label>
              <Button>{"calculate".toUpperCase()}</Button>
            </Label>
            <LabelTextResult>Result:</LabelTextResult>
            <Result result={result} />
            <Info>
              Kursy walut pobierane są z Europejskiego Banku Centralnego.
              <br />
              Aktualne na dzień:
              <br />
              {ratesData.date}
            </Info>
          </Fieldset>
        </>
      )}
    </StyledForm>
  );
};

export default Form;
