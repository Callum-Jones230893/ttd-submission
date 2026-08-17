import { render, screen } from "@testing-library/react"
import Home from "@/app/page"

describe("The home page is functioning for the user correctly", () => {
  test("The page is ", () => {
    render(<Home />)

    expect(screen.getByTestId("initial-display")).toBeInTheDocument()
    expect(screen.queryByTestId("board")).not.toBeInTheDocument()
    expect(screen.queryByTestId("results")).not.toBeInTheDocument()
  })
})
