import { act, fireEvent, render, screen } from "@testing-library/react"
import Home from "@/app/page"

describe("The home page is functioning for the user correctly", () => {

  test("The initial display component works", () => {
    render(<Home />)

    const startContainer = screen.getByTestId("initial-display")
    const startButton = screen.getByTestId("start-button")

    fireEvent.click(startButton)

    expect(startContainer).not.toBeInTheDocument()

    const board = screen.getByTestId("board")

    expect(board).toBeInTheDocument()
  })

  test("The board works correctly and the game functions properly", () => {
    jest.useFakeTimers()
    render(<Home />)

    const startButton = screen.getByTestId("start-button")
    fireEvent.click(startButton)

    const board = screen.getByTestId("board")

    const cardNames = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"]
    cardNames.forEach((name) => {
      const pairs = screen.getAllByLabelText(name)

      fireEvent.click(pairs[0])
      fireEvent.click(pairs[1])

      act(() => {
        jest.advanceTimersByTime(1000)
      })
    })

    expect(board).not.toBeInTheDocument()

    const resultsContainer = screen.getByTestId("results-container")
    expect(resultsContainer).toBeInTheDocument()

    jest.useRealTimers()
  })

  test("The results show correctly after the user finishes the game", () => {
    jest.useFakeTimers()
    render(<Home />)

    const startButton = screen.getByTestId("start-button")
    fireEvent.click(startButton)

    const cardNames = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"]
    cardNames.forEach((name) => {
      const pairs = screen.getAllByLabelText(name)
      fireEvent.click(pairs[0])
      fireEvent.click(pairs[1])
      act(() => {
        jest.advanceTimersByTime(1000)
      })
    })

    const resultsContainer = screen.getByTestId("results-container")
    const restartButton = screen.getByTestId("restart-button")

    expect(resultsContainer).toBeInTheDocument()

    fireEvent.click(restartButton)

    expect(resultsContainer).not.toBeInTheDocument()

    const board = screen.getByTestId("board")
    expect(board).toBeInTheDocument()

    jest.useRealTimers()
  })
})
