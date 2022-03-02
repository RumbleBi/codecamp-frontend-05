import Wordle from "../src/components/units/wordle/Wordle.container";

export default function HomePage() {
  return (
    <Wordle
      isCorrect0={0}
      isCorrect1={0}
      isCorrect2={0}
      isCorrect3={0}
      isCorrect4={0}
    />
  );
}
