import { fireEvent, render, screen } from "@testing-library/react"
import Results from "@/components/Results"

test("The game restarts when the button is clicked", () => {
  const mockSetShowResults = jest.fn()
  render(<Results setShowResults={mockSetShowResults} />)

  const resultsContainer = screen.getByTestId("results-container")
  const restartButton = screen.getByTestId("restart-button")

  expect(resultsContainer).toBeInTheDocument()
  expect(restartButton).toHaveTextContent(/play again/i)

  fireEvent.click(restartButton)

  expect(mockSetShowResults).toHaveBeenCalledWith(false)
})
