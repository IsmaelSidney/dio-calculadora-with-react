import React, { useState } from 'react';
import { Container } from './styles/styles';
import Display from './components/Display';
import Keyboard from './components/Keyboard';

function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstValue, setFirstValue] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleNumber = (number) => {
    if (displayValue === '0') {
      setDisplayValue(number);
    } else {
      setDisplayValue(displayValue + number);
    }
  };

  const handleOperation = (op) => {
    setFirstValue(displayValue);
    setOperation(op);
    setDisplayValue('0');
  };

  const calculate = () => {
    const first = parseFloat(firstValue);
    const second = parseFloat(displayValue);
    
    switch(operation) {
      case '+':
        setDisplayValue(String(first + second));
        break;
      case '-':
        setDisplayValue(String(first - second));
        break;
      case '*':
        setDisplayValue(String(first * second));
        break;
      case '/':
        setDisplayValue(String(first / second));
        break;
      default:
        break;
    }
    setOperation(null);
  };

  const clear = () => {
    setDisplayValue('0');
    setFirstValue(null);
    setOperation(null);
  };

  return (
    <>
      <Container>
        <Display value={displayValue} />
        <Keyboard 
          handleNumber={handleNumber}
          handleOperation={handleOperation}
          calculate={calculate}
          clear={clear}
        />
      </Container>
    </>
  );
}

export default App;
