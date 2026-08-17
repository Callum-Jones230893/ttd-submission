import { render, screen } from "@testing-library/react"
import BoardLayout from "@/components/BoardLayout"

const mockCardArray = [
  { id: "001", name: "Pikachu", image: "pikachu.jpg", status: "unflipped" },
  { id: "002", name: "Pikachu", image: "pikachu.jpg", status: "unflipped" },
  { id: "001", name: "Bulbasaur", image: "bulbasaur.jpg", status: "unflipped" },
  { id: "002", name: "Bulbasaur", image: "bulbasaur.jpg", status: "unflipped" },
  { id: "5", name: "Charmander", image: "charmander.png", status: "unflipped" },
  { id: "6", name: "Charmander", image: "charmander.png", status: "unflipped" },
  { id: "7", name: "Squirtle", image: "squirtle.png", status: "unflipped" },
  { id: "8", name: "Squirtle", image: "squirtle.png", status: "unflipped" },
]

test("The board is rendering the correct items when the game has started", () => {
  const mockSetShowResults = jest.fn()
  render(<BoardLayout setShowResults={mockSetShowResults} />)

  const cards = screen.getAllByTestId("card-image")

  expect(cards).toHaveLength(mockCardArray.length)
})
