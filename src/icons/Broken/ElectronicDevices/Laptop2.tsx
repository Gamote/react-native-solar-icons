import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLaptop2 = (props: SvgProps) => (
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
      d="M20.5 15v-5c0-2.828 0-4.243-.879-5.121C18.743 4 17.328 4 14.5 4H14M3.5 15v-5c0-2.828 0-4.243.879-5.121C5.257 4 6.672 4 9.5 4h.5M12 20H5a3 3 0 0 1-3-3v-1a1 1 0 0 1 1-1h4.333a2 2 0 0 1 1.2.4l.934.7a2 2 0 0 0 1.2.4h2.666a2 2 0 0 0 1.2-.4l.934-.7a2 2 0 0 1 1.2-.4H21a1 1 0 0 1 1 1v1a3 3 0 0 1-3 3h-3"
    />
  </Svg>
);
export default SvgLaptop2;
