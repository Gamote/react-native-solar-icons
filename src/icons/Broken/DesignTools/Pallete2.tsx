import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPallete2 = (props: SvgProps) => (
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
      d="M7 3.341A9.93 9.93 0 0 1 12 2c5.523 0 10 4.489 10 10.026 0 8.152-8.161 2.393-9.738 4.9-.395.628.032 1.41.555 1.935a1.68 1.68 0 0 1 0 2.372c-.523.525-1.235.838-1.97.753C5.867 21.413 2 17.172 2 12.026A10 10 0 0 1 3.345 7"
    />
    <Circle cx={17.5} cy={11.5} r={1.5} stroke="#000" strokeWidth={1.5} />
    <Circle cx={6.5} cy={11.5} r={1.5} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M11.085 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM16 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
    />
  </Svg>
);
export default SvgPallete2;
