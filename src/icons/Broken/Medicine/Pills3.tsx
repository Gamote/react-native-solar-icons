import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPills3 = (props: SvgProps) => (
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
      d="M11 9.472c0-1.151-.44-2.303-1.318-3.182A4.48 4.48 0 0 0 7 5m4 4.472a4.5 4.5 0 1 1-9 0m9 0H2m0 0c0-1.151.44-2.303 1.318-3.182M14.757 7.122A3 3 0 1 0 19 2.879a3 3 0 0 0-4.243 4.243ZM17.381 20.905l3.524-3.524a3.738 3.738 0 0 0-5.286-5.286l-3.524 3.524A3.738 3.738 0 0 0 14 21.927"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M14 14s.281 1.46 1.911 3.09S19 19 19 19"
    />
  </Svg>
);
export default SvgPills3;
