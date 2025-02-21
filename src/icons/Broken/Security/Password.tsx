import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPassword = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 10V14M10.2676 11L13.7317 13M13.7314 11L10.2673 13"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M6.73241 10V14M4.99999 11L8.46409 13M8.46386 11L4.99976 13"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M17.2681 10V14M15.5356 11L18.9997 13M18.9995 11L15.5354 13"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C21.4816 5.82475 21.7706 6.69989 21.8985 8"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgPassword;
