import React from 'react'
import ReactDOM from 'react-dom'
import Form from './Form'
import { render, fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

describe('Form', () => {
  const mockState = {
    date: '5/21',
    id: null,
    name: 'Charlie',
    number: '3',
    time: '7:30'
  }

  it('should render without crashing', () => {
    const { getByPlaceholderText } = render(<Form />)
    expect(getByPlaceholderText('Name')).toBeInTheDocument()
  })

  it('Should have inputs that can take in text', () => {
    const { getByPlaceholderText } = render(<Form />)
    const nameInput = getByPlaceholderText('Name')
    fireEvent.change(nameInput, { target: { value: 'Charlie' } })
    expect(nameInput.value).toEqual('Charlie')
  })

  it('should be able to send a reservation', () => {
    const mockBookReservation = jest.fn()

    const { getByText, getByPlaceholderText } = render(<Form bookReservation={mockBookReservation} />)
    const nameInput = getByPlaceholderText('Name')
    fireEvent.change(nameInput, { target: { value: 'Charlie' } })

    const dateInput = getByPlaceholderText('Date')
    fireEvent.change(dateInput, { target: { value: '5/21' } })

    const timeInput = getByPlaceholderText('Time')
    fireEvent.change(timeInput, { target: { value: '7:30' } })

    const numberInput = getByPlaceholderText('Number of Guests')
    fireEvent.change(numberInput, { target: { value: 3 } })

    const bookBtn = getByText('Book!')
    fireEvent.click(bookBtn)

    expect(mockBookReservation).toHaveBeenCalledWith(mockState)
  })
})