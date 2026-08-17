import { createEvent, fireEvent, render, screen } from "@testing-library/react"
import InitialDisplay from "@/components/InitialDisplay"

test("The component is rendering with a single h2 element , a p element for instructions and a button on page load", () => {
  const mockSetGameStart = jest.fn()
  render(<InitialDisplay setGameStart={mockSetGameStart} />)

  const subtitle = screen.getByRole("heading", {level: 2, "name": /get started/i})
  const instructions = screen.getByTestId("instructions")
  const startButton = screen.getByTestId("start-button")

  expect(subtitle).toBeInTheDocument()
  expect(subtitle).toHaveTextContent(/Get started/i)

  expect(instructions).toBeInTheDocument()
  expect(instructions).toHaveTextContent(/To play, click one card at a time, only two cards can be flipped per turn, match all the pairs to win/i)
  
  expect(startButton).toBeInTheDocument()
  expect(startButton).toHaveTextContent(/Start/i)
})

test("The game starts when the button is clicked", () => {
  const mockSetGameStart = jest.fn()
  render(<InitialDisplay setGameStart={mockSetGameStart} />)

  const startButton = screen.getByTestId("start-button")

  expect(startButton).toBeInTheDocument()
  expect(startButton).toHaveTextContent(/Start/i)

  fireEvent.click(startButton)

  expect(mockSetGameStart).toHaveBeenCalledWith(true)
})
