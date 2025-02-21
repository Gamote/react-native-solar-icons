import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAdhesivePlaster2 = (props: SvgProps) => (
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
      strokeWidth={1.5}
      d="m20.416 12.765-9.181-9.18a5.41 5.41 0 0 0-7.65 7.65l9.18 9.18a5.41 5.41 0 1 0 7.65-7.65Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m12.765 20.416 7.65-7.65m-9.18-9.182-7.65 7.651"
      opacity={0.5}
    />
    <Circle
      cx={9.172}
      cy={12}
      r={1}
      fill="#000"
      transform="rotate(-45 9.172 12)"
    />
    <Circle
      cx={12}
      cy={14.828}
      r={1}
      fill="#000"
      transform="rotate(-45 12 14.828)"
    />
    <Circle
      cx={12}
      cy={9.172}
      r={1}
      fill="#000"
      transform="rotate(-45 12 9.172)"
    />
    <Circle
      cx={14.828}
      cy={12}
      r={1}
      fill="#000"
      transform="rotate(-45 14.828 12)"
    />
  </Svg>
);
export default SvgAdhesivePlaster2;
