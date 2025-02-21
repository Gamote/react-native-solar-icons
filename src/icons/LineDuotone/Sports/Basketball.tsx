import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBasketball = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M3.34 17C6.1 21.783 12.216 23.42 17 20.66a9.96 9.96 0 0 0 4.196-4.731 9.99 9.99 0 0 0-.536-8.93 9.99 9.99 0 0 0-7.465-4.928A9.96 9.96 0 0 0 7 3.339C2.217 6.101.578 12.217 3.34 17Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16.95 20.573S16.01 13.983 14 10.5c-2.01-3.482-6.95-7.073-6.95-7.073m.527 17.39c1.482-4.47 8.876-9.424 14.287-8.237m-5.45-9.371c-1.488 4.421-8.74 9.303-14.125 8.243"
      opacity={0.5}
    />
  </Svg>
);
export default SvgBasketball;
