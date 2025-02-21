import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVideoFrameCut = (props: SvgProps) => (
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
      d="M17 3.5v17"
    />
    <Path
      stroke="#000"
      strokeDasharray="3 3"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 2v20"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M7 3.5v17M3 8.5h4m14 0h-4M3 15.5h4m14 0h-4"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.5 3.003c2.794.02 4.324.163 5.328 1.168C20.892 5.234 20.99 6.885 21 10M14.5 20.996c2.794-.02 4.324-.163 5.328-1.168 1.064-1.063 1.162-2.714 1.171-5.829M9.5 20.996c-2.793-.02-4.323-.163-5.327-1.168C3 18.656 3 16.771 3 13v-2C3 7.227 3 5.342 4.172 4.17 5.176 3.166 6.706 3.023 9.5 3.003"
    />
  </Svg>
);
export default SvgVideoFrameCut;
