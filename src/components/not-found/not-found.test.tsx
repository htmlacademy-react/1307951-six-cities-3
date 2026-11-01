import { render, screen } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component';
import NotFound from './not-found';

describe('Component: NotFound', () => {
  it('should render correctly', () => {
    const expectedHeaderText = /404/;
    const expectLinkText = /go to main page/i;

    render(withHistory(<NotFound type={'page'} />));
    expect(screen.getByText(expectedHeaderText)).toBeInTheDocument();
    expect(screen.getByText(expectLinkText)).toBeInTheDocument();
  });
});
