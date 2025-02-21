import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgProjector = (props: SvgProps) => (
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
      d="M18 6.017c1.553.047 2.48.22 3.121.862C22 7.757 22 9.172 22 12s0 4.243-.879 5.121C20.243 18 18.828 18 16 18H8c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h2"
    />
    <Path
      fill="#000"
      d="M18.33 20.335a.75.75 0 1 0 1.34-.67zm-1-2 1 2 1.34-.67-1-2zM5.67 20.335a.75.75 0 1 1-1.34-.67zm1-2-1 2-1.34-.67 1-2z"
    />
    <Circle cx={14} cy={9} r={5} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 9a2 2 0 1 0 2-2"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.5 9.5V11"
    />
  </Svg>
);
export default SvgProjector;
