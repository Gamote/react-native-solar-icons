import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlaaylistMinimalistic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M10 16H3"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M10 11H3"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M19.125 10.6854C20.767 11.6334 21.588 12.1074 21.8478 12.7347C22.0507 13.2247 22.0507 13.7753 21.8478 14.2654C21.588 14.8926 20.767 15.3666 19.125 16.3146C17.483 17.2626 16.662 17.7366 15.9889 17.648C15.4631 17.5787 14.9862 17.3034 14.6633 16.8826C14.25 16.344 14.25 15.396 14.25 13.5C14.25 11.604 14.25 10.656 14.6633 10.1174C14.9862 9.69661 15.4631 9.4213 15.9889 9.35206C16.662 9.26345 17.483 9.73744 19.125 10.6854Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M20 6L9.5 6M3 6L5.25 6"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgPlaaylistMinimalistic;
