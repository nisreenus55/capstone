import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { MemoryRouter } from "react-router";

describe("BookingForm", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });
  test("Renders the BookingForm heading", () => {
    render(
      <MemoryRouter>
        {" "}
        <BookingForm />
      </MemoryRouter>
    );
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
  });

  test("Choose date", () => {
    render(
      <MemoryRouter>
        <BookingForm />
      </MemoryRouter>
    );
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
  });

  test("Number of guests", () => {
    render(
      <MemoryRouter>
        <BookingForm />
      </MemoryRouter>
    );
    const headingElement = screen.getByText("Number of guests");
    expect(headingElement).toBeInTheDocument();
  });

  test("Occasion", () => {
    render(
      <MemoryRouter>
        <BookingForm />
      </MemoryRouter>
    );
    const headingElement = screen.getByText("Occasion");
    expect(headingElement).toBeInTheDocument();
  });

  test("Special Requirements", () => {
    render(
      <MemoryRouter>
        <BookingForm />
      </MemoryRouter>
    );
    const headingElement = screen.getByText("Special Requirements");
    expect(headingElement).toBeInTheDocument();
  });

  test("Make Your reservation", () => {
    render(
      <MemoryRouter>
        <BookingForm />
      </MemoryRouter>
    );
    const btn = screen.getByText("Make Your reservation");
    fireEvent.click(btn);
    expect(btn).toBeInTheDocument();
  });
});
