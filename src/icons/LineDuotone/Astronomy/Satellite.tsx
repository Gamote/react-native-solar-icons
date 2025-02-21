import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSatellite = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#8E93A6"
      strokeWidth={1.5}
      d="M20.47 10.918s-1.847-.615-4.31-3.078-3.078-4.31-3.078-4.31"
    />
    <Path
      fill="#8E93A6"
      d="M16.69 8.37a.75.75 0 0 0-1.06-1.06zm-15.054.661a.75.75 0 0 0 .728 1.312zm12.022 12.605a.75.75 0 0 0 1.31.728zM4.47 18.47a.75.75 0 1 0 1.06 1.06zm8.248-15.595L1.636 9.03l.728 1.312 11.082-6.157zm7.096 7.679-6.156 11.082 1.31.728 6.157-11.082zM15.63 7.31 4.47 18.47l1.06 1.06L16.69 8.37z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13.082 10.918A5.224 5.224 0 1 0 20.47 3.53a5.224 5.224 0 0 0-7.388 7.388Z"
    />
  </Svg>
);
export default SvgSatellite;
