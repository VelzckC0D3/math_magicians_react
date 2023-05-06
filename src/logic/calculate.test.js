import calculate from './calculate';

describe('calculate function', () => {
  it('should return an object with null values when buttonName is AC', () => {
    const obj = { total: '10', next: '5', operation: '+' };
    const buttonName = 'AC';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('should update the next value when buttonName is a number', () => {
    const obj = { total: '10', next: '5', operation: '+' };
    const buttonName = '3';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ total: '10', next: '53', operation: '+' });
  });

  it('should update the next value to "0." when buttonName is "." and there is an operation but no next value', () => {
    const obj = { total: '10', operation: '+' };
    const buttonName = '.';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ total: '10', next: '0.', operation: '+' });
  });

  it('should perform the operation and return the result when buttonName is "="', () => {
    const obj = { total: '10', next: '5', operation: '+' };
    const buttonName = '=';
    const result = calculate(obj, buttonName);
    expect(result).toEqual({ total: '15', next: null, operation: null });
  });
});
