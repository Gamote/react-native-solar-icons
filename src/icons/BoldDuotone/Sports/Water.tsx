import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWater = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M4.581 6.01c.691-1.015 2.134-.977 2.862-.1C8.425 7.091 9.81 8.25 12 8.25c2.228 0 3.59-.93 4.518-2.096.722-.907 2.26-1.053 3.015.023.619.88 1.295 1.58 2.63 1.877a.75.75 0 1 1-.325 1.464c-1.841-.408-2.799-1.436-3.532-2.479-.048-.069-.135-.12-.266-.117a.46.46 0 0 0-.348.165C16.517 8.565 14.741 9.75 12 9.75c-2.823 0-4.59-1.532-5.71-2.882a.33.33 0 0 0-.261-.118.24.24 0 0 0-.207.104c-.746 1.097-1.704 2.23-3.66 2.664a.75.75 0 1 1-.324-1.464C3.25 7.74 3.926 6.974 4.58 6.01m0 10c.691-1.015 2.134-.977 2.862-.1.982 1.181 2.367 2.34 4.557 2.34 2.228 0 3.59-.93 4.518-2.096.722-.907 2.26-1.053 3.015.023.619.88 1.295 1.58 2.63 1.877a.75.75 0 1 1-.325 1.464c-1.841-.408-2.799-1.436-3.532-2.479-.048-.069-.135-.12-.266-.117a.46.46 0 0 0-.348.165C16.517 18.566 14.741 19.75 12 19.75c-2.823 0-4.59-1.532-5.71-2.882a.33.33 0 0 0-.261-.118.24.24 0 0 0-.207.104c-.746 1.097-1.704 2.23-3.66 2.664a.75.75 0 0 1-.324-1.465c1.412-.312 2.088-1.079 2.743-2.043"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M4.582 11.01c.69-1.015 2.133-.977 2.862-.1.982 1.181 2.366 2.34 4.556 2.34 2.228 0 3.591-.93 4.519-2.096.721-.907 2.259-1.053 3.015.023.618.88 1.294 1.58 2.628 1.877a.75.75 0 0 1-.324 1.464c-1.841-.408-2.799-1.436-3.532-2.479-.048-.069-.135-.12-.266-.117a.46.46 0 0 0-.347.165C16.517 13.566 14.74 14.75 12 14.75c-2.823 0-4.59-1.533-5.71-2.882a.33.33 0 0 0-.261-.118.24.24 0 0 0-.207.104c-.746 1.097-1.703 2.23-3.66 2.664a.75.75 0 0 1-.324-1.465c1.412-.312 2.088-1.079 2.744-2.043"
      opacity={0.5}
    />
  </Svg>
);
export default SvgWater;
