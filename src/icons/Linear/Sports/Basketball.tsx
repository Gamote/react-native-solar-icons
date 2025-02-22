import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBasketball = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3.33946 16.9997C6.10089 21.7826 12.2168 23.4214 16.9997 20.66C18.9493 19.5344 20.3765 17.8514 21.1962 15.9286C22.3875 13.1341 22.2958 9.83304 20.66 6.99972C19.0242 4.1664 16.2112 2.43642 13.1955 2.07088C11.1204 1.81935 8.94932 2.21386 6.99972 3.33946C2.21679 6.10089 0.578039 12.2168 3.33946 16.9997Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M16.9497 20.5732C16.9497 20.5732 16.0108 13.982 14.0004 10.5C11.9901 7.01798 7.05023 3.42676 7.05023 3.42676"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M21.8636 12.5799C16.4526 11.3928 9.05882 16.3475 7.57718 20.8172"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M16.414 3.20884C14.9261 7.6299 7.67431 12.5122 2.28865 11.4515"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgBasketball;
