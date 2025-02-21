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
      fill="#000"
      d="m20.416 12.765-9.181-9.18a5.41 5.41 0 0 0-7.65 7.65l9.18 9.18a5.41 5.41 0 1 0 7.65-7.65"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="m19.885 12.235.53.53q.27.27.494.567l-7.577 7.577a5.4 5.4 0 0 1-.567-.493l-.53-.531zM10.668 3.09q.296.224.567.495l.53.53-7.65 7.65-.53-.53q-.27-.27-.495-.567z"
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
      cx={14.829}
      cy={12}
      r={1}
      fill="#000"
      transform="rotate(-45 14.829 12)"
    />
  </Svg>
);
export default SvgAdhesivePlaster2;
