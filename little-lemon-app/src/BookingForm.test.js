import * as React from "react";
import { render, screen, fireEvent, renderHook } from "@testing-library/react";
import BookingForm, {
  handleSpecialChange,
  handleDateChange,
  handleSubmit,
} from "./BookingForm";
import { MemoryRouter } from "react-router";
import { useReducer } from "react";
import { useState } from "react";
import * as CommonModule from "./Handlers";

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

describe("BookingForm validations", () => {
  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });
  test("Validate date- negative test", () => {
    render(<BookingForm />);

    const date = "2023-11-30";
    const input = screen.getByTestId("book-date", { name: "date" });
    const { result } = renderHook(() => useReducer(handleDateChange, ""));
    const [state, dispatch] = result.current;

    expect(state).toBeFalsy();
    expect(input).toBeInTheDocument();
    expect(input.value).toBe("");
    expect(screen.getByTestId("book-button")).toBeDisabled();
  });

  test("Validate date- positive test", () => {
    const fun = jest.fn();
    render(<BookingForm onChange={fun} />);

    const date = "2023-11-30";
    const input = screen.getByTestId("book-date");

    const { result } = renderHook(() => useReducer(handleDateChange, date));
    const [state, dispatch] = result.current;

    fireEvent.change(input, { target: { valuetest: date } });

    expect(input.valuetest).toBe(date);
    expect(state).toBeTruthy();
    expect(input).toBeInTheDocument();
    expect(screen.queryByTestId("invalidDate")).not.toBeInTheDocument();
  });

  test("Validate date- neg test", () => {
    render(<BookingForm />);

    const date = "";
    const input = screen.getByTestId("book-date");

    const { result } = renderHook(() => useReducer(handleDateChange, date));
    const [state, dispatch] = result.current;

    fireEvent.change(input, { target: { valueTest: date } });

    expect(input.valueTest).toBe(date);
    expect(state).toBeFalsy();
    expect(input).toBeInTheDocument();
    expect(screen.getByTestId("validDateDiv")).toBeInTheDocument();
  });

  test("Validate Special Requirements- positive test", () => {
    render(<BookingForm />);

    const special = "Corner Table";
    const input = screen.getByTestId("book-special");

    fireEvent.change(input, { target: { valuetest: special } });

    expect(input.valuetest).toBe(special);
    expect(input).toBeInTheDocument();
    expect(screen.queryByTestId("invalidSpecial")).not.toBeInTheDocument();
  });

  test("Validate Special Requirements- neg test", () => {
    render(<BookingForm />);

    const special = "";
    const input = screen.getByTestId("book-special");

    const { result } = renderHook(() => useReducer(handleDateChange, special));
    const [state, dispatch] = result.current;

    fireEvent.change(input, { target: { valueTest: special } });

    expect(input.valueTest).toBe(special);
    expect(state).toBeFalsy();
    expect(input).toBeInTheDocument();
    expect(screen.getByTestId("validSpecialDiv")).toBeInTheDocument();
  });

  test("Validate submit button", () => {

    const mockLogin = jest
      .spyOn(CommonModule, "handleSubmit")
      .mockImplementation();

    render(<BookingForm />);
    fireEvent.submit(screen.getByTestId("form"));

    const button = screen.getByTestId("book-button");

    fireEvent.click(button);
    expect(mockLogin).toHaveBeenCalledTimes(1);
  });
});
