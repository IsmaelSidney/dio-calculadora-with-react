import React from 'react';
import { DisplayContainer } from '../styles/styles';

const Display = ({ value }) => {
  return (
    <DisplayContainer>
      {value}
    </DisplayContainer>
  );
};

export default Display;
