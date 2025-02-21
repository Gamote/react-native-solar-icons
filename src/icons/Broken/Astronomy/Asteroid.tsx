import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAsteroid = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10 19a6 6 0 0 0-7.915-5.688M17 8a6 6 0 0 0 4.823 5.885m-3.505-9.637q-.286.356-.515.752"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M16 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13 8.5a2.5 2.5 0 1 0-2.5 2.5"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
    />
  </Svg>
);
export default SvgAsteroid;
