import { render } from '@testing-library/react';
import Calculator from './Calculator.js';

describe('Calculator', () => {
  test('renders correctly', () => {
    const { container } = render(<Calculator />);
    expect(container.querySelector('.inputCont')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
