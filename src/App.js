import { useState } from "react";
import Form from "./Form";
import currencies from "./Currencies";
import Header from "./Header";
import Fotter from "./Fotter";
import { Clock } from "./Form/Clock";

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
      <Clock />
      <Form result={result} calculateResult={calculateResult} />
      <Fotter title="Wg.średniego kursu NBP z dn. 09.03.2023r." />
    </>
  );
}

export default App;
