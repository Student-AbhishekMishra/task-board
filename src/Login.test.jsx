/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import Login from "./pages/Login";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "@testing-library/jest-dom";

test("renders login button", () => {
  render(
    <BrowserRouter>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </BrowserRouter>
  );

  expect(
    screen.getByRole("button", { name: /login/i })
  ).toBeInTheDocument();
});

test("basic math test", () => {
  expect(2 + 2).toBe(4);
});

test("string test", () => {
  expect("task").toContain("ta");
});
