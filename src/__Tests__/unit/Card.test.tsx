import { createEvent, fireEvent, render, screen } from "@testing-library/react"
import Card from "@/components/Card"

const mockCardArray = [
  { id: "001", name: "Pikachu", image: "pikachu.png", status: "unflipped" },
  { id: "002", name: "Pikachu", image: "pikachu.png", status: "unflipped" },
  { id: "003", name: "Bulbasaur", image: "bulbasaur.png", status: "unflipped" },
  { id: "004", name: "Bulbasaur", image: "bulbasaur.png", status: "unflipped" },
]

test("All of the cards are rendering with the back of the card showing when the board is displayed", () => {
  const setSelectedCards = jest.fn()
  render(
    <Card
      cardArray={mockCardArray}
      setSelectedCards={setSelectedCards}
      selectedCards={[]}
      isLocked={false}
      setIsLocked={jest.fn()}
    />
  )

  const cards = screen.getAllByTestId("card-image")

  cards.forEach((card) => {
    expect(card).toHaveAttribute("src", "cardBack.png")
  })

  expect(cards).toHaveLength(mockCardArray.length)
})

test("The cards flip when clicked", () => {
  const setSelectedCards = jest.fn()
  render(
    <Card
      cardArray={mockCardArray}
      setSelectedCards={setSelectedCards}
      selectedCards={[]}
      isLocked={false}
      setIsLocked={jest.fn()}
    />
  )

  const cards = screen.getAllByTestId("card-image")

  cards.forEach((card, index) => {
    fireEvent.click(card)

    expect(setSelectedCards).toHaveBeenCalledTimes(1)
    expect(setSelectedCards).toHaveBeenCalledWith([
      { ...mockCardArray[index], status: "flipped" }
    ])

    setSelectedCards.mockClear()
  })
})

test("The same card cannot be clicked multiple times", () => {
  const mockFlippedArray = mockCardArray.map((card) => ({
    ...card,
    status: "flipped"
  }))

  const setSelectedCards = jest.fn()
  render(
    <Card
      cardArray={mockFlippedArray}
      setSelectedCards={setSelectedCards}
      selectedCards={[]}
      isLocked={false}
      setIsLocked={jest.fn()}
    />,
  )

  const cards = screen.getAllByTestId("card-image")

  cards.forEach((card) => {
    fireEvent.click(card)
  })

  expect(setSelectedCards).not.toHaveBeenCalled()
})

test("That a paired card cannot be clicked again", () => {
  const mockFlippedArray = mockCardArray.map((card) => ({
    ...card,
    status: "paired",
  }))

  const setSelectedCards = jest.fn()
  render(
    <Card
      cardArray={mockFlippedArray}
      setSelectedCards={setSelectedCards}
      selectedCards={[]}
      isLocked={false}
      setIsLocked={jest.fn()}
    />
  )

  const cards = screen.getAllByTestId("card-image")

  cards.forEach((card) => {
    fireEvent.click(card)
  })

  expect(setSelectedCards).not.toHaveBeenCalled()
})
