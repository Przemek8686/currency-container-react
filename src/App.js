import { useState } from "react";
import Form from "./Form";
import currencies from "./Currencies";
import Header from "./Header";
function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ name }) => name === currency).rate;

    setResult({
      targetAmount: amount / rate,
      currency,
    });
  };

  return (
    <>
      <Header title="currency conventer" />
      <Form result={result} calculateResult={calculateResult} />

    </>
  );
}

export default App;
