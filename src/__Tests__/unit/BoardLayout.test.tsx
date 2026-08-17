import { render, screen } from "@testing-library/react"
import BoardLayout from "@/components/BoardLayout"
import { memoryCards } from "@/data/data"

test("The board is rendering the correct items when the game has started", () => {
  const mockSetShowResults = jest.fn()
  render(<BoardLayout setShowResults={mockSetShowResults} />)

  const cards = screen.getAllByTestId("card-image")

  expect(cards).toHaveLength(memoryCards.length)
})
