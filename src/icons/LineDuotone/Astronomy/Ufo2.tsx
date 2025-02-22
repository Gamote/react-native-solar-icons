import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUfo2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17 7.21094C19.989 7.93258 22 9.28138 22 10.8262C22 13.1313 17.5228 14.9999 12 14.9999C6.47715 14.9999 2 13.1313 2 10.8262C2 9.28138 4.01099 7.93258 7 7.21094"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M7 7.72876C7 5.11714 9.11714 3 11.7288 3H12.2712C14.8829 3 17 5.11714 17 7.72876C17 7.90601 16.9458 8.07918 16.8003 8.18039C16.3862 8.4684 15.1898 9 12 9C8.81016 9 7.6138 8.4684 7.19972 8.18039C7.0542 8.07918 7 7.90601 7 7.72876Z"
      stroke="#8E93A6"
      strokeWidth={1.5}
    />
    <Circle cx={12} cy={12} r={1} fill="#8E93A6" />
    <Circle cx={7} cy={11} r={1} fill={props.primaryColor} />
    <Circle cx={17} cy={11} r={1} fill={props.primaryColor} />
    <Path
      d="M12 21V18"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M18 20V17"
      stroke="#8E93A6"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M6 20V17"
      stroke="#8E93A6"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgUfo2;
