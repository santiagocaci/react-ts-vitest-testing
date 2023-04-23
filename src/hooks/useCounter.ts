import { useState } from 'react';

type Props = {
  initialCount: number;
};

export const useCounter = ({ initialCount }: Props = { initialCount: 0 }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
};
