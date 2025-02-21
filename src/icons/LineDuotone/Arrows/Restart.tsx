import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRestart = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G clipPath="url(#clip0_1648_2268)">
      <Path
        opacity={0.5}
        d="M19.7285 10.9286C20.4412 13.5975 19.7507 16.5633 17.6569 18.6571C14.5327 21.7813 9.46734 21.7813 6.34315 18.6571C3.21895 15.5329 3.21895 10.4676 6.34315 7.34338C9.46734 4.21918 14.5327 4.21918 17.6569 7.34338L18.364 8.05048"
        stroke={props.primaryColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.1214 8.05026H18.364V3.80762"
        stroke={props.primaryColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1648_2268">
        <Rect width={24} height={24} fill={props.secondaryColor} />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgRestart;
