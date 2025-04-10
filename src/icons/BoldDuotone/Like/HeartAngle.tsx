import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHeartAngle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 9.13734C2 13.5424 5.29819 16.0836 8.10627 18.2471C8.39814 18.4719 8.68471 18.6927 8.96173 18.9111C10 19.7296 11 20.5002 12 20.5002V5.50088C7.50016 0.825708 2 4.27441 2 9.13734Z"
      fill={props.primaryColor}
    />
    <Path
      d="M14 7.49952L12 5.50088V20.5002C13 20.5002 14 19.7296 15.0383 18.9111C15.3153 18.6927 15.6019 18.4719 15.8937 18.2471C18.7018 16.0835 22 13.5424 22 9.13734C22 4.67489 17.3685 1.40333 13.1285 4.50736L15.0605 6.43867C15.3534 6.73151 15.3535 7.20638 15.0607 7.49933C14.7678 7.79228 14.2929 7.79236 14 7.49952Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgHeartAngle;
