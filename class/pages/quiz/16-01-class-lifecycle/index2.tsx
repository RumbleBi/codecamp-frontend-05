import { useEffect, useState } from "react";

export default function FunctionalLifecycle() {
  const [Click, setClick] = useState(false);
  const [Click2, setClick2] = useState(false);
  useEffect(() => {
    if (Click === true) alert("Changed!!");
  }, [Click]);
  const onMouseON = () => {
    setClick(true);
  };
  const onMouseOFF = () => {
    setClick(false);
  };

  useEffect(() => {
    if (Click2 === true) alert("Bye!!");
  }, [Click2]);
  const onClickLeave = () => {
    setClick2(true);
  };

  return (
    <div>
      <button onMouseUp={onMouseON} onMouseDown={onMouseOFF}>
        변경
      </button>
      <button onClick={onClickLeave}>이동</button>
    </div>
  );
}
