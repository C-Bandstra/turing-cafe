import React from 'react'
import ReactDOM from 'react-dom'
import Form from './Form'
import { render, fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { MemoryRouter } from 'react-router-dom'

describe('Form', () => {
  it('should render without crashing', () => {
    const { getByPlaceholderText } = render(<Form />)
    expect(getByPlaceholderText('Name')).toBeInTheDocument()
  })
})