import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlarmTurnOff = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle
      opacity={0.5}
      cx={12}
      cy={13}
      r={9}
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M14.1213 15.1213L12 13M12 13L9.87866 10.8787M12 13L14.1213 10.8787M12 13L9.87868 15.1213"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M3.5 4.5L7.50002 2"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.5 4.5L16.5 2"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgAlarmTurnOff;
