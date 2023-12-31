import {
  render,
  screen,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App, { updateTimes } from "./App";
import { MemoryRouter } from "react-router-dom";
import { renderHook } from "@testing-library/react";

import * as React from "react";

import useFetchedData from "./useFetchedData";
import { useReducer } from "react";
global.fetch = jest.fn();


describe("BookingForm", () => {

  beforeEach(() => {
    global.fetch = jest.fn();
    jest.spyOn(console, "log").mockImplementation(() => {});
    global.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      });
  });

  afterAll(() => {
    console.log.mockRestore();
  });

  afterEach(() => {
    console.log.mockClear();
  });


  test("should render with fetched data", async () => {

    jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(React.useEffect).toHaveBeenCalled();
  });
});

describe("Test using renderHook", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
    jest.spyOn(console, "log").mockImplementation(() => {});
    global.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      });
  });

  test("should return the initial values for data, error and loading", () => {
    render(
      <MemoryRouter>
        <useFetchedData />
      </MemoryRouter>
    );

    const { result } = renderHook(() => useFetchedData("2023-11-30"));
    const { data, error, loading } = result.current;
    expect(data).toBe(null);
    expect(error).toBe(null);
    expect(loading).toBe(true);
  });

  test("should display times in 1 sec", () => {
    jest.useFakeTimers();
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByTestId("times-row")).toBeInTheDocument();
  });

  test("should call updateTimes function", () => {
    const data = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    const { result } = renderHook(() => useReducer(updateTimes, data));
    const [state, dispatch] = result.current;
    dispatch({ type: "setTimes", payload: { times: data } });

    expect(state).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
  });
});
