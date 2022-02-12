import { v4 as uuidv4 } from "uuid";

export default function MapFilter() {
  const list = [100, 200, 300, 400];
  const word = ["asdasd", "qwe", "e"];
  const id = uuidv4();
  return (
    <div>
      <div>
        {word
          .filter((el) => el.length > 2)
          .map((el) => (
            <div key={id}>{el}</div>
          ))}
      </div>
    </div>
  );
}
