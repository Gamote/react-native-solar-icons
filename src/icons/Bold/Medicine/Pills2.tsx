import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPills2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12.0261 9.96544C12.6382 9.13578 13 8.11014 13 7C13 4.23858 10.7614 2 8 2C6.88986 2 5.86422 2.36179 5.03456 2.9739L12.0261 9.96544Z"
      fill={props.primaryColor}
    />
    <Path
      d="M10.9654 11.0261C10.1358 11.6382 9.11014 12 8 12C5.23858 12 3 9.76142 3 7C3 5.88986 3.36179 4.86422 3.9739 4.03456L10.9654 11.0261Z"
      fill={props.primaryColor}
    />
    <Path
      d="M21.9438 16.25C21.79 15.2305 21.3206 14.2495 20.5356 13.4645C18.5829 11.5118 15.4171 11.5118 13.4645 13.4645C12.6795 14.2495 12.2101 15.2305 12.0563 16.25H21.9438Z"
      fill={props.primaryColor}
    />
    <Path
      d="M21.9438 17.75H12.0563C12.2101 18.7695 12.6795 19.7505 13.4645 20.5355C15.4171 22.4882 18.5829 22.4882 20.5356 20.5355C21.3206 19.7505 21.79 18.7695 21.9438 17.75Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgPills2;
