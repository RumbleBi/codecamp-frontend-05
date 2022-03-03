import { render, screen } from "@testing-library/react";
import JestUnitTestPage from "../../34-02-jest-unit-test";
import "@testing-library/jest-dom/extend-expect";

it("내가 원하는대로 그려지나용?", () => {
  render(<JestUnitTestPage />);

  const myText = screen.getByText("철수는 13살입니다.");
  expect(myText).toBeInTheDocument();

  const myText2 = screen.getByText("철수의 취미 입력하기: ");
  expect(myText2).toBeInTheDocument();
});
