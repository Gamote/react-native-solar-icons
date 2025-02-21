import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAdhesivePlaster2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M20.4155 12.765L11.235 3.58447C9.12233 1.47184 5.69709 1.47184 3.58447 3.58447C1.47184 5.69709 1.47184 9.12233 3.58447 11.235L12.765 20.4155C14.8777 22.5282 18.3029 22.5282 20.4155 20.4155C22.5282 18.3029 22.5282 14.8777 20.4155 12.765Z"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M12.7651 20.4155L20.4155 12.7651M11.235 3.58447L3.58447 11.235"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Circle
      cx={9.17154}
      cy={12}
      r={1}
      transform="rotate(-45 9.17154 12)"
      fill="black"
    />
    <Circle
      cx={12}
      cy={14.8284}
      r={1}
      transform="rotate(-45 12 14.8284)"
      fill="black"
    />
    <Circle
      cx={12}
      cy={9.17163}
      r={1}
      transform="rotate(-45 12 9.17163)"
      fill="black"
    />
    <Circle
      cx={14.8284}
      cy={12}
      r={1}
      transform="rotate(-45 14.8284 12)"
      fill="black"
    />
  </Svg>
);
export default SvgAdhesivePlaster2;
