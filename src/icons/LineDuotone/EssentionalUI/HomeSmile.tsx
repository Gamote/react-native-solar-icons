import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHomeSmile = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M2 12.204c0-2.289 0-3.433.52-4.381.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"
    />
  </Svg>
);
export default SvgHomeSmile;
