import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgThreeSquares = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Rect x={12} y={2} width={10} height={10} rx={2} fill="black" />
    <Path
      opacity={0.7}
      d="M12 7H11C9.11438 7 8.17157 7 7.58579 7.58579C7 8.17157 7 9.11438 7 11V13C7 14.8856 7 15.8284 7.58579 16.4142C8.17157 17 9.11438 17 11 17H13C14.8856 17 15.8284 17 16.4142 16.4142C17 15.8284 17 14.8856 17 13V12H16C14.1144 12 13.1716 12 12.5858 11.4142C12 10.8284 12 9.88562 12 8V7Z"
      fill="black"
    />
    <Path
      opacity={0.4}
      d="M7 12V13C7 14.8856 7 15.8284 7.58579 16.4142C8.17157 17 9.11438 17 11 17H12V18C12 19.8856 12 20.8284 11.4142 21.4142C10.8284 22 9.88562 22 8 22H6C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V16C2 14.1144 2 13.1716 2.58579 12.5858C3.17157 12 4.11438 12 6 12H7Z"
      fill="black"
    />
  </Svg>
);
export default SvgThreeSquares;
