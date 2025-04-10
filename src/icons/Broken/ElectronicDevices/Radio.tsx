import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRadio = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 9H17C18.1046 9 19 9.89543 19 11C19 12.1046 18.1046 13 17 13H7C5.89543 13 5 12.1046 5 11C5 9.89543 5.89543 9 7 9H8"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M9 17C9 17.8284 8.32843 18.5 7.5 18.5C6.67157 18.5 6 17.8284 6 17C6 16.1716 6.67157 15.5 7.5 15.5C8.32843 15.5 9 16.1716 9 17Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M15 11.5V13"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M13 17H18"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M6.5 6L15 2"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C21.4816 7.82475 21.7706 8.69989 21.8985 10"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgRadio;
