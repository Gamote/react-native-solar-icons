import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgProjector = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M18 6.01732C19.5534 6.06413 20.48 6.23738 21.1213 6.87868C22 7.75736 22 9.17157 22 12C22 14.8284 22 16.2426 21.1213 17.1213C20.2426 18 18.8284 18 16 18H8C5.17157 18 3.75736 18 2.87868 17.1213C2 16.2426 2 14.8284 2 12C2 9.17157 2 7.75736 2.87868 6.87868C3.75736 6 5.17157 6 8 6H10"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      opacity={0.6}
      d="M18.3292 20.3354C18.5144 20.7059 18.9649 20.8561 19.3354 20.6708C19.7059 20.4856 19.8561 20.0351 19.6708 19.6646L18.3292 20.3354ZM17.3292 18.3354L18.3292 20.3354L19.6708 19.6646L18.6708 17.6646L17.3292 18.3354Z"
      fill="black"
    />
    <Path
      opacity={0.6}
      d="M5.67082 20.3354C5.48558 20.7059 5.03507 20.8561 4.66459 20.6708C4.29411 20.4856 4.14394 20.0351 4.32918 19.6646L5.67082 20.3354ZM6.67082 18.3354L5.67082 20.3354L4.32918 19.6646L5.32918 17.6646L6.67082 18.3354Z"
      fill="black"
    />
    <Circle cx={14} cy={9} r={5} stroke="black" strokeWidth={1.5} />
    <Path
      opacity={0.5}
      d="M12 9C12 10.1046 12.8954 11 14 11C15.1046 11 16 10.1046 16 9C16 7.89543 15.1046 7 14 7"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M5.5 9.5L5.5002 11.0001"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgProjector;
