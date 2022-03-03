import { render, screen } from "@testing-library/react";
import JestUnitTestPage from "../../34-03-jest-unit-test-snapshot";
import "@testing-library/jest-dom/extend-expect";

it("컴포넌트가 기존이랑 바뀐게 없는지 비교해보자 - 스냅샷 테스트", () => {
  const result = render(<JestUnitTestPage />);
  expect(result.container).toMatchSnapshot(); // 스냅샷 찍어놓은게 있으면 기존 스냅샷과 비교, 없다면 새로하나 찍는다!
});
