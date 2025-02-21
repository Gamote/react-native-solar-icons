import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStreets = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.134 0 6.455.988 7.952L19.952 2.988C18.455 2 16.134 2 12 2 7.286 2 4.929 2 3.464 3.464M21.012 4.048 13.061 12l7.951 7.952C22 18.455 22 16.134 22 12s0-6.455-.988-7.952M12 13.06l-7.952 7.952C5.545 22 7.866 22 12 22s6.455 0 7.952-.988z"
    />
  </Svg>
);
export default SvgStreets;
