import { render, screen } from "@testing-library/react"
import Header from "@/components/Header"

test("", () => {
  render(<Header />)

  const headerTitle = screen.getByRole("heading", {level: 1, "name": /Test your memory/i})

  expect(headerTitle).toBeInTheDocument()
  expect(headerTitle).toHaveTextContent(/Test your memory/i)
})