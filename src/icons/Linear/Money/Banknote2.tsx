import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBanknote2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2 11C2 8.17157 2 6.75736 2.87868 5.87868C3.75736 5 5.17157 5 8 5H13C15.8284 5 17.2426 5 18.1213 5.87868C19 6.75736 19 8.17157 19 11C19 13.8284 19 15.2426 18.1213 16.1213C17.2426 17 15.8284 17 13 17H8C5.17157 17 3.75736 17 2.87868 16.1213C2 15.2426 2 13.8284 2 11Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M19.0002 8.07617C19.9753 8.17208 20.6317 8.38885 21.1216 8.87873C22.0002 9.75741 22.0002 11.1716 22.0002 14.0001C22.0002 16.8285 22.0002 18.2427 21.1216 19.1214C20.2429 20.0001 18.8287 20.0001 16.0002 20.0001H11.0002C8.17181 20.0001 6.7576 20.0001 5.87892 19.1214C5.38903 18.6315 5.17226 17.9751 5.07635 17"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M13 11C13 12.3807 11.8807 13.5 10.5 13.5C9.11929 13.5 8 12.3807 8 11C8 9.61929 9.11929 8.5 10.5 8.5C11.8807 8.5 13 9.61929 13 11Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M16 13L16 9"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M5 13L5 9"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgBanknote2;
