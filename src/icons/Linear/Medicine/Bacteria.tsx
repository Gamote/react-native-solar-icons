import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBacteria = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M6 15C6 13.3431 7.34315 12 9 12C10.6569 12 12 13.3431 12 15C12 16.6569 10.6569 18 9 18C7.34315 18 6 16.6569 6 15Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M4.5 11.5L4.91406 10.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M14.4648 7.17134C14.4648 7.17134 15.7077 6.99995 16.5862 7.87844C17.4647 8.75694 17.2933 9.99977 17.2933 9.99977"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M9.00001 9.29303C9.00001 9.29303 7.75718 9.46441 6.87869 8.58592C6.0002 7.70743 6.17158 6.4646 6.17158 6.4646"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M19 13.1362C19 13.1362 17.838 13.6092 17.5165 14.8093C17.1949 16.0093 17.9647 16.9999 17.9647 16.9999"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M13.4209 17.772L14.9995 19"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M14.5 14V12"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 5L10 5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12.5 9.5L11.5 8.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgBacteria;
