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
      d="M8.352 20.242A4.63 4.63 0 0 0 12 22a4.63 4.63 0 0 0 3.648-1.758 27.2 27.2 0 0 1-7.296 0"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M18.75 9v.704c0 .845.24 1.671.692 2.374l1.108 1.723c1.011 1.574.239 3.713-1.52 4.21a25.8 25.8 0 0 1-14.06 0c-1.759-.497-2.531-2.636-1.52-4.21l1.108-1.723c.452-.703.693-1.529.693-2.374V9c0-3.866 3.022-7 6.749-7s6.75 3.134 6.75 7m-8.678.75A.737.737 0 0 1 9.349 9c0-.414.323-.75.723-.75h3.856c.293 0 .556.183.668.463a.77.77 0 0 1-.156.817l-2.622 2.72h2.11c.4 0 .723.336.723.75s-.323.75-.723.75h-3.856a.72.72 0 0 1-.668-.463.77.77 0 0 1 .156-.817l2.623-2.72z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBellOff;
