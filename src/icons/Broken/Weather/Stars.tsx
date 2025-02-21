import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStars = (props: SvgProps) => (
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
      d="m10.503 5.017-.536-1.36c-.346-.876-1.588-.876-1.934 0L6.961 6.377a1.04 1.04 0 0 1-.585.585L3.658 8.033c-.877.346-.877 1.588 0 1.934l2.718 1.072c.268.105.48.317.585.585l1.072 2.718c.346.877 1.588.877 1.934 0l1.072-2.718c.105-.268.317-.48.585-.585l2.718-1.072c.877-.346.877-1.588 0-1.934l-1.359-.536"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M16.489 13.348a.55.55 0 0 1 1.023 0l.8 2.03a.55.55 0 0 0 .31.31l2.03.8a.55.55 0 0 1 0 1.024l-2.03.8a.55.55 0 0 0-.31.31l-.8 2.03a.55.55 0 0 1-1.024 0l-.8-2.03a.55.55 0 0 0-.31-.31l-2.03-.8a.55.55 0 0 1 0-1.024l2.03-.8a.55.55 0 0 0 .31-.31z"
    />
  </Svg>
);
export default SvgStars;
