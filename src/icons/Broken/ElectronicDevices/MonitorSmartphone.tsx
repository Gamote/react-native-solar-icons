import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMonitorSmartphone = (props: SvgProps) => (
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
      d="M11 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11v-1c0-3.771 0-5.657 1.172-6.828.47-.47 1.054-.751 1.828-.92M22 8.5c0-2.335 0-3.502-.472-4.386a4 4 0 0 0-1.642-1.642C19.002 2 17.835 2 15.5 2H9"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M14 15c0-1.886 0-2.828.586-3.414S16.114 11 18 11s2.828 0 3.414.586S22 13.114 22 15v3c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18z"
    />
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M19 20h-2" />
    <Path
      fill="#000"
      d="M11 22v.75a.75.75 0 0 0 .75-.75zm-3-.75a.75.75 0 0 0 0 1.5zM11.75 17a.75.75 0 0 0-1.5 0zM11 21.25H8v1.5h3zm.75.75v-5h-1.5v5z"
    />
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M11 13H2" />
  </Svg>
);
export default SvgMonitorSmartphone;
