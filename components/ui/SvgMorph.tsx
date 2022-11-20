import { ReactElement, useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";

type SvgMorphProps = {
  width: number;
  height: number;
  duration: number;
  fill: string;
  pathA: string;
  pathB: string;
};

const SvgMorph = ({
  width,
  height,
  duration,
  fill,
  pathA,
  pathB,
}: SvgMorphProps) => {
  const [active, setActive] = useState(false);
  const { x } = useSpring({
    config: { duration: duration },
    x: active ? 1 : 0,
  });

  useEffect(() => {
    const id = setTimeout(() => {
      setActive(!active);
    }, 2000);

    return () => clearTimeout(id);
  }, [active]);

  useEffect(() => {
    setActive(!active);
  }, [])

  return (
    <svg
      id="visual"
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
    >
      <animated.path
        fill={fill}
        style={{
            scaleX: width/900,
            scaleY: height/600,
        }}
        d={x.to({
          range: [0, 1],
          output: [pathA, pathB],
        })}
      />
    </svg>
  );
};

export default SvgMorph;
