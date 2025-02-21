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
      d="M4 2h16v10.27c0 1.34 0 2.009-.268 2.6-.268.59-.773 1.03-1.781 1.912l-2 1.749C14.068 20.177 13.127 21 12 21s-2.068-.823-3.951-2.47l-2-1.748C5.04 15.9 4.536 15.46 4.269 14.87 4 14.28 4 13.61 4 12.27z"
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
