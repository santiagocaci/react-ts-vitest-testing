import { act, renderHook } from '@testing-library/react';
import { useCounter } from '@/hooks/useCounter';

describe('useCounter', () => {
  it('should render the initial count', () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  it('should accept and render the same initial count', () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10 },
    });
    expect(result.current.count).toBe(10);
  });

  it('should increment the count', () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 4 },
    });
    act(() => result.current.increment());
    expect(result.current.count).toBe(5);
  });

  it('should decrement the count', () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 6 },
    });
    act(() => result.current.decrement());
    expect(result.current.count).toBe(5);
  });
});
