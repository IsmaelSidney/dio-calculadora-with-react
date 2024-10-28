import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  margin: 50px auto;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

export const DisplayContainer = styled.div`
  background-color: #728064;
  padding: 20px;
  font-size: 32px;
  font-family: 'VT323', monospace;
  text-align: right;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: inset 0 0 5px rgba(0,0,0,0.1);
  color: #151515;
`;

export const KeyboardContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const NumbersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  flex: 3;
`;

export const OperationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

export const Button = styled.button`
  padding: 15px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e0e0e0;
  }

  &:active {
    background-color: #d0d0d0;
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: default;
    opacity: 0.7;
    
    &:hover {
      background-color: #f5f5f5;
    }
  }
`;
