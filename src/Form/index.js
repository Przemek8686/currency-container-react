import "./style.css";
import { useState } from "react";
import currencies from "../currencies";
import Result from "../Result";

const Form = ({ result, calculateResult }) => {
  const [currency, setCurrency] = useState(currencies[0].name);
  const [amount, setAmount] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <p>
          <label>
            <span className="form__labelText"> Amount in PLN* </span>
            <input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              className="form__field"
              type="number"
              min="0.1"
              step="any"
              name="amount"
              required
            />
          </label>
        </p>
        <p>
          <label>
            <span className="form__labelText">I want to exchange for:</span>
            <select
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
            </select>
          </label>
        </p>
        <p>
          <button className="form__button">{"calculate".toUpperCase()}</button>
        </p>
        <p className="form__labelText form__labelText--result">Result:</p>
        <Result result={result} />
      </fieldset>
    </form>
  );
};

export default Form;
