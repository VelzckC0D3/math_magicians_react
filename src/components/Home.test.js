import { render, screen } from '@testing-library/react';
import Home from './Home.js';

describe('must show content when the user navigates to the home page ', () => {
  test('when navigates to home page it displays the title ', () => {
    const { container } = render(<Home />);

    expect(screen.getByText('Welcome To Our Page')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
