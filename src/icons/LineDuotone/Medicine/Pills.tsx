import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPills = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17.8445 6.15547C17.8445 6.15547 17.4119 8.39999 14.9057 10.9061C12.3996 13.4123 10.1555 13.8445 10.1555 13.8445M20.4075 16.4075C18.2843 18.5308 14.8418 18.5308 12.7185 16.4075L7.59246 11.2815C5.46918 9.15824 5.46918 5.71573 7.59246 3.59246C9.71573 1.46918 13.1582 1.46918 15.2815 3.59246L20.4075 8.71849C22.5308 10.8418 22.5308 14.2843 20.4075 16.4075Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M14.5 6.5L13 5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M6.73022 10.1346C4.02637 10.7172 2 13.122 2 16C2 19.3137 4.68629 22 8 22C10.8911 22 13.3046 19.9552 13.8732 17.233"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgPills;
