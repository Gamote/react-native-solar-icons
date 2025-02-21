import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHeart = (props: SvgProps) => (
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
      d="M8.106 18.247C5.298 16.084 2 13.542 2 9.137 2 4.274 7.5.826 12 5.501v15c-1 0-2-.771-3.038-1.59q-.417-.328-.856-.664"
      clipRule="evenodd"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M15.038 18.911C17.981 16.591 22 14.001 22 9.137S16.5.826 12 5.501v15c1 0 2-.771 3.038-1.59"
    />
  </Svg>
);
export default SvgHeart;
