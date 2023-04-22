import { useState } from "react";
import Form from "./Form";
import currencies from "./currencies";
import Header from "./Header";
import Footer from "./Footer";
import { Clock } from "./Clock";


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
      <Clock/>
      <Form result={result} calculateResult={calculateResult} />
      <Footer/>
    </>
  );
}

export default App;
