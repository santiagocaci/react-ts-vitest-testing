type Props = {
  count: number;
  handleIncrement?: () => void;
  handleDecrement?: () => void;
};

export const Counter = ({ count, handleDecrement, handleIncrement }: Props) => {
  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      {handleIncrement && <button onClick={handleIncrement}>Increment</button>}
      {handleDecrement && <button onClick={handleDecrement}>Decrement</button>}
    </div>
  );
};
