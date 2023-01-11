import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './Search';

describe('search',()=>{
  describe('somke test',()=>{
    it('should render component correctly', () => {
      const onChangeMock = jest.fn();
      render(<Search onChange={onChangeMock} />);
      const SearchElement = screen.getByLabelText(/^search by task or assign/i);
      expect(SearchElement).toBeInTheDocument();
    });
  })
})