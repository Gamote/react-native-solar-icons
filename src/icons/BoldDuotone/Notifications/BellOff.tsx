import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBellOff = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723c.452-.703.693-1.529.693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M7.243 18.545a5.002 5.002 0 0 0 9.513 0c-3.145.59-6.367.59-9.513 0M9.349 9c0 .414.323.75.723.75h2.11L9.56 12.47a.77.77 0 0 0-.156.817c.112.28.375.463.668.463h3.856c.4 0 .723-.336.723-.75a.737.737 0 0 0-.723-.75h-2.11l2.622-2.72a.77.77 0 0 0 .157-.817.72.72 0 0 0-.669-.463h-3.856c-.4 0-.723.336-.723.75"
    />
  </Svg>
);
export default SvgBellOff;
