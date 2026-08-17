import { render, screen } from "@testing-library/react"
import Footer from "@/components/Footer"

test("The footer is rendering", () => {
  render(<Footer />)

  const footerElement = screen.getByRole("contentinfo")

  expect(footerElement).toBeInTheDocument()
  expect(footerElement).toHaveTextContent(/2026/i)
})