import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment } from '../src/Appointment';
// Expect the following structure:
/* {
  customer: { firstName: 'Ashley', lastName: 'Jones', phoneNumber: '(123) 555-0123'},
  stylist: 'Jay Speares',
  startsAt: '2019-02-02 09:30',
  service: 'Cut',
  notes: 'lorem ipsum'
} */

describe('Appointment', () => {
  let customer;
  let container;
  beforeEach(() => {
    container = document.createElement('div');
  })
  const render = component => ReactDOM.render(component, container);

  it('renders the customer first name', () => {
    customer = { firstName: 'Ashley' }
    render(<Appointment customer={customer} />)
    expect(container.textContent).toMatch('Ashley');
  })

  it('renders another customer first name', () => {
    customer = { firstName: 'Jordan' }
    render(<Appointment customer={customer} />)
    expect(container.textContent).toMatch('Jordan');
  })
});