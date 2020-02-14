import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from './Header';



test ('text displays', () => {

    const { getByText } = render(<Header />);
    getByText(/Soccer Players - Google Search Rankings/i);


});

test ('dark mode toggle', () => {
  const { getByText } = render(<Header />);


  fireEvent.click(getByText(/OFF/i))
  
  

  fireEvent.click(getByText(/ON/i))

})
