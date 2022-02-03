import { useRef, useEffect } from "react";

export default function useRefPage() {
  const Ref = useRef(null);

  useEffect(() => {
    Ref.current?.focus();
  });
  return (
    <div>
      <input type="password" ref={Ref} />
    </div>
  );
}
