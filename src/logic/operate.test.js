import operate from './operate';

describe('operate', () => {
  test('adds two numbers', () => {
    expect(operate('2', '2', '+')).toBe('4');
  });

  test('subtracts two numbers', () => {
    expect(operate('3', '2', '-')).toBe('1');
  });

  test('multiplies two numbers', () => {
    expect(operate('2', '3', 'x')).toBe('6');
  });

  test('divides two numbers', () => {
    expect(operate('6', '2', '÷')).toBe('3');
  });

  test('handles division by zero', () => {
    expect(operate('1', '0', '÷')).toBe("Can't divide by 0.");
  });

  test('calculates modulo', () => {
    expect(operate('7', '3', '%')).toBe('1');
  });

  test('handles modulo with divisor zero', () => {
    expect(operate('7', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  test('throws an error for unknown operations', () => {
    expect(() => operate('1', '2', '^')).toThrow("Unknown operation '^'");
  });
});
