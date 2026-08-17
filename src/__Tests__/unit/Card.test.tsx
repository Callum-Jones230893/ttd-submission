import { fireEvent, render, screen } from "@testing-library/react"
import Card from "@/components/Card"
import { memoryCards } from "@/data/data"

test("All of the cards are rendering with the back of the card showing when the board is displayed", () => {
  const setSelectedCards = jest.fn()
  render(
    <Card
      cardArray={memoryCards}
      setSelectedCards={setSelectedCards}
      selectedCards={[]}
      isLocked={false}
      setIsLocked={jest.fn()}
    />,
  )

  const cards = screen.getAllByTestId("card-image")

  cards.forEach((card) => {
    expect(card).toHaveAttribute("src", "cardBack.png")
  })

  expect(cards).toHaveLength(memoryCards.length)
})

test("The cards flip when clicked", () => {
  const setSelectedCards = jest.fn()
  render(
    <Card
      cardArray={memoryCards}
      setSelectedCards={setSelectedCards}
      selectedCards={[]}
      isLocked={false}
      setIsLocked={jest.fn()}
    />,
  )

  const cards = screen.getAllByTestId("card-image")

  cards.forEach((card, index) => {
    fireEvent.click(card)

    expect(setSelectedCards).toHaveBeenCalledTimes(1)
    expect(setSelectedCards).toHaveBeenCalledWith([
      { ...memoryCards[index], status: "flipped" },
    ])

    setSelectedCards.mockClear()
  })
})

test("The same card cannot be clicked multiple times", () => {
  const mockFlippedArray = memoryCards.map((card) => ({
    ...card,
    status: "flipped",
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
  const mockFlippedArray = memoryCards.map((card) => ({
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
    />,
  )

  const cards = screen.getAllByTestId("card-image")

  cards.forEach((card) => {
    fireEvent.click(card)
  })

  expect(setSelectedCards).not.toHaveBeenCalled()
})
