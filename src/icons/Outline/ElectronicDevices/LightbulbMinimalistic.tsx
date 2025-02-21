import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLightbulbMinimalistic = (props: SvgProps) => (
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
      d="M9.25 19.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m.667 2.5a.75.75 0 0 1 .75-.75h2.666a.75.75 0 0 1 0 1.5h-2.666a.75.75 0 0 1-.75-.75M4.25 8.218C4.25 4.313 7.804 1.25 12 1.25s7.75 3.063 7.75 6.968v.003c-.01 2.207-.959 4.405-2.645 6.004l-.002.002L16 15.266a.8.8 0 0 0-.249.577 1.907 1.907 0 0 1-1.907 1.907h-3.686a1.907 1.907 0 0 1-1.907-1.907.8.8 0 0 0-.25-.577l-1.103-1.04-.003-.001C5.21 12.625 4.26 10.428 4.25 8.22zm1.5-.002c.008 1.786.78 3.595 2.176 4.92l1.103 1.038c.46.433.721 1.037.721 1.669 0 .225.182.407.407.407h3.686a.407.407 0 0 0 .407-.407c0-.632.261-1.236.721-1.67l1.102-1.037h.001c1.396-1.325 2.168-3.134 2.176-4.92C18.249 5.3 15.535 2.75 12 2.75S5.751 5.3 5.75 8.216"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgLightbulbMinimalistic;
