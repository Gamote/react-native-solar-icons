import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBill = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M2 2h20" />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M4 2h16v10.277c0 1.34 0 2.01-.268 2.601s-.773 1.032-1.781 1.915l-2 1.75c-1.883 1.647-2.824 2.47-3.951 2.47s-2.068-.823-3.951-2.47l-2-1.75c-1.009-.883-1.513-1.324-1.78-1.915C4 14.288 4 13.618 4 12.278z"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8.5 13h7M8.5 8h7"
    />
  </Svg>
);
export default SvgBill;
