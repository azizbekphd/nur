import { useEffect, useState } from "react";

type Size = { width: number; height: number };

function useWindowSize(): Size | undefined {
  const [windowSize, setWindowSize] = useState<Size>();

  useEffect(() => {
    const f = () =>
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    window.onresize = f;
    f();
  }, []);
  return windowSize;
}

export default useWindowSize;
