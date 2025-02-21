import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAirbudsCharge = (props: SvgProps) => (
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
      d="M18 11.5v-.2a1 1 0 0 1 1-1 3 3 0 0 0 3-3V5.188c0-.175 0-.262-.004-.335a3 3 0 0 0-2.849-2.85C19.074 2 18.987 2 18.813 2c-.29 0-.436 0-.558.006a5 5 0 0 0-4.749 4.749c-.006.122-.006.267-.006.558V13.5"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M10.5 19v.75a2.25 2.25 0 0 1-4.5 0V19m4.5 0V9.313c0-.29 0-.436-.006-.558a5 5 0 0 0-4.749-4.749C5.623 4 5.478 4 5.187 4c-.174 0-.26 0-.334.004a3 3 0 0 0-2.85 2.849C2 6.926 2 7.013 2 7.188V9.3a3 3 0 0 0 3 3 1 1 0 0 1 1 1V19m4.5 0H6"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19.5 5v2.5M4.5 7v2.5"
      opacity={0.5}
    />
    <Circle
      cx={18}
      cy={18}
      r={4}
      stroke="#000"
      strokeWidth={1.5}
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 16.5 17 18h2l-1 1.5"
    />
  </Svg>
);
export default SvgAirbudsCharge;
