import { Rate } from "antd";
import { useState } from "react";

export default function LibraryRatePage() {
  const [count, setCount] = useState("");
  const [value, setValue] = useState(3);
  const handleChange = (value) => {
    setValue(value);
    if (value === 1) {
      alert("1점");
      setCount("1점");
    } else if (value === 2) {
      alert("2점");
      setCount("2점");
    } else if (value === 3) {
      alert("3점");
      setCount("3점");
    } else if (value === 4) {
      alert("4점");
      setCount("4점");
    } else {
      alert("5점");
      setCount("5점");
    }
  };

  return (
    <>
      <Rate onChange={handleChange} value={value} />
      <div>{count}</div>
    </>
  );
}
