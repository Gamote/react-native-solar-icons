import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSleeping = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2 6v12M22 18v-2.357c0-1.995 0-2.993-.28-3.794A5 5 0 0 0 18.65 8.78C17.85 8.5 16.852 8.5 14.857 8.5c-.798 0-1.197 0-1.518.112a2 2 0 0 0-1.227 1.227C12 10.16 12 10.56 12 11.357V16M2 16h20"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M9.5 11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgSleeping;
