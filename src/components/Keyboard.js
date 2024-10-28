import React from 'react';
import { KeyboardContainer, Button, NumbersContainer, OperationsContainer } from '../styles/styles';

const Keyboard = ({ handleNumber, handleOperation, calculate, clear }) => {
  return (
    <KeyboardContainer>
      <NumbersContainer>
        <Button onClick={() => clear()}>C</Button>
        <Button disabled></Button>
        <Button disabled></Button>
        <Button onClick={() => handleNumber('7')}>7</Button>
        <Button onClick={() => handleNumber('8')}>8</Button>
        <Button onClick={() => handleNumber('9')}>9</Button>
        <Button onClick={() => handleNumber('4')}>4</Button>
        <Button onClick={() => handleNumber('5')}>5</Button>
        <Button onClick={() => handleNumber('6')}>6</Button>
        <Button onClick={() => handleNumber('1')}>1</Button>
        <Button onClick={() => handleNumber('2')}>2</Button>
        <Button onClick={() => handleNumber('3')}>3</Button>
        <Button onClick={() => handleNumber('0')}>0</Button>
        <Button onClick={() => handleNumber('.')}>.</Button>
      </NumbersContainer>
      
      <OperationsContainer>
        <Button onClick={() => handleOperation('/')}>/</Button>
        <Button onClick={() => handleOperation('*')}>×</Button>
        <Button onClick={() => handleOperation('-')}>-</Button>
        <Button onClick={() => handleOperation('+')}>+</Button>
        <Button onClick={() => calculate()}>=</Button>
      </OperationsContainer>
    </KeyboardContainer>
  );
};

export default Keyboard;
