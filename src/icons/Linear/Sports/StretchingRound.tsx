import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStretchingRound = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={14.5} cy={4.5} r={2.5} stroke="black" strokeWidth={1.5} />
    <Path
      d="M19 21.9955V18.0484C19 16.2725 17.395 14.9194 15.6265 15.2042M7.94806 13.4343L7.92328 13.4104C6.88143 12.4036 7.6864 10.7847 8.5932 10.1422C9.5 9.49967 13.3451 8.49967 13.3451 13.4341C13.3451 18.1285 9.69442 21.9998 5 21.9998"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgStretchingRound;
