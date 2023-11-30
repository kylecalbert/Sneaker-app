import React, { useState } from 'react';
import { Text } from '../common/Text/Text';

import { IncrementorContainer, Button, Value } from './Incrementor.styled';

export const Incrementor = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <IncrementorContainer>
      <Button onClick={handleDecrement}>
        <Text variant="title">-</Text>
      </Button>
      <Value>{count}</Value>
      <Button onClick={handleIncrement}>
        <Text variant="title">+</Text>
      </Button>
    </IncrementorContainer>
  );
};

export default Incrementor;
