import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGps = (props: SvgProps) => (
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
      d="M12.5 14.959q-.245.04-.5.041a3 3 0 1 1 2.959-2.5M2 12h2M20 12h2M12 4V2M12 22v-2"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8 5.07A8 8 0 1 1 5.07 8"
    />
  </Svg>
);
export default SvgGps;
