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
      d="M2 9.137C2 14 6.02 16.592 8.962 18.911 10 19.73 11 20.501 12 20.501s2-.771 3.038-1.59C17.981 16.591 22 14.001 22 9.137S16.5.826 12 5.501C7.5.826 2 4.274 2 9.137"
    />
  </Svg>
);
export default SvgHeart;
