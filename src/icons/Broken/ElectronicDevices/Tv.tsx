import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTv = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2 14L2 16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22L16 22C18.8284 22 20.2426 22 21.1213 21.1213C22 20.2426 22 18.8284 22 16V12C22 9.17157 22 7.75736 21.1213 6.87868C20.2426 6 18.8284 6 16 6L8 6C5.17157 6 3.75736 6 2.87868 6.87868C2.23738 7.51998 2.06413 8.44655 2.01732 10"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M9 2L12 5.5L15 2"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M16 6V10M16 22V14"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M20 16C20 15.4477 19.5523 15 19 15C18.4477 15 18 15.4477 18 16C18 16.5523 18.4477 17 19 17C19.5523 17 20 16.5523 20 16Z"
      fill="black"
    />
    <Path
      d="M20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12Z"
      fill="black"
    />
  </Svg>
);
export default SvgTv;
