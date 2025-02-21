import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCopyright = (props: SvgProps) => (
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
      d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m.286-13.25c-2.003 0-3.536 1.503-3.536 3.25s1.533 3.25 3.536 3.25c.511 0 .995-.1 1.43-.277a.75.75 0 0 1 .567 1.389c-.614.25-1.29.388-1.997.388-2.732 0-5.036-2.079-5.036-4.75s2.304-4.75 5.036-4.75c.707 0 1.383.138 1.997.388a.75.75 0 0 1-.566 1.39 3.8 3.8 0 0 0-1.431-.278"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCopyright;
