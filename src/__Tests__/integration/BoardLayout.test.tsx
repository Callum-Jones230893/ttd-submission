import { act, fireEvent, render, screen } from "@testing-library/react"
import BoardLayout from "@/components/BoardLayout"

test("The cards lock when paired correctly", () => {
  const mockSetShowResults = jest.fn()
  render(<BoardLayout setShowResults={mockSetShowResults} />)

  const pikachuCards = screen.getAllByLabelText("Pikachu")

  fireEvent.click(pikachuCards[0])
  fireEvent.click(pikachuCards[1])

  expect(pikachuCards[0].querySelector("img")).toHaveAttribute(
    "src",
    "pikachu.png",
  )
  expect(pikachuCards[1].querySelector("img")).toHaveAttribute(
    "src",
    "pikachu.png",
  )
})

test("The cards reset when not paired after a delay", () => {
  jest.useFakeTimers()

  const mockSetShowResults = jest.fn()
  render(<BoardLayout setShowResults={mockSetShowResults} />)

  const pikachu = screen.getAllByLabelText("Pikachu")[0]
  const bulbasaur = screen.getAllByLabelText("Bulbasaur")[0]

  fireEvent.click(pikachu)
  fireEvent.click(bulbasaur)

  act(() => {
    jest.advanceTimersByTime(1000)
  })

  expect(pikachu.querySelector("img")).toHaveAttribute("src", "cardBack.png")
  expect(bulbasaur.querySelector("img")).toHaveAttribute("src", "cardBack.png")

  jest.useRealTimers()
})

test("The user can only select two cards per turn", () => {
  const mockSetShowResults = jest.fn()
  render(<BoardLayout setShowResults={mockSetShowResults} />)

  const pikachuCards = screen.getAllByLabelText("Pikachu")
  const bulbasaurCards = screen.getAllByLabelText("Bulbasaur")

  fireEvent.click(pikachuCards[0])
  fireEvent.click(bulbasaurCards[0])

  fireEvent.click(bulbasaurCards[1])

  expect(bulbasaurCards[1].querySelector("img")).toHaveAttribute(
    "src",
    "cardBack.png"
  )
})

test("That when all cards have been matches, the user see's the results", () => {
  jest.useFakeTimers()

  const mockSetShowResults = jest.fn()
  render(<BoardLayout setShowResults={mockSetShowResults} />)

  const cardNames = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"]

  cardNames.forEach((name) => {
    const pairs = screen.getAllByLabelText(name)

    fireEvent.click(pairs[0])
    fireEvent.click(pairs[1])

    act(() => {
      jest.advanceTimersByTime(1000)
    })
  })

  expect(mockSetShowResults).toHaveBeenCalled()
  expect(mockSetShowResults).toHaveBeenCalledWith(true)

  jest.useRealTimers()
})
