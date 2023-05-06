import operate from './operate';

describe('operate', () => {
  test('adds two numbers', () => {
    expect(operate('2', '2', '+')).toMatchSnapshot();
  });

  test('subtracts two numbers', () => {
    expect(operate('3', '2', '-')).toMatchSnapshot();
  });

  test('multiplies two numbers', () => {
    expect(operate('2', '3', 'x')).toMatchSnapshot();
  });

  test('divides two numbers', () => {
    expect(operate('6', '2', '÷')).toMatchSnapshot();
  });

  test('handles division by zero', () => {
    expect(operate('1', '0', '÷')).toMatchSnapshot();
  });

  test('calculates modulo', () => {
    expect(operate('7', '3', '%')).toMatchSnapshot();
  });

  test('handles modulo with divisor zero', () => {
    expect(operate('7', '0', '%')).toMatchSnapshot();
  });

  test('throws an error for unknown operations', () => {
    expect(() => operate('1', '2', '^')).toThrowErrorMatchingSnapshot();
  });
});
