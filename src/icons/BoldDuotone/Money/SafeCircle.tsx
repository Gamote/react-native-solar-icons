import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSafeCircle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2"
      opacity={0.5}
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M10.47 8.47a.75.75 0 0 1 1.06 0l1 1q.065.065.11.14c.401-.23.865-.36 1.36-.36s.959.13 1.36.36a.8.8 0 0 1 .11-.14l1-1a.75.75 0 1 1 1.06 1.06l-1 1a.8.8 0 0 1-.14.11c.23.401.36.865.36 1.36s-.13.959-.36 1.36q.075.045.14.11l1 1a.75.75 0 1 1-1.06 1.06l-1-1a.8.8 0 0 1-.11-.14c-.401.23-.865.36-1.36.36s-.959-.13-1.36-.36a.8.8 0 0 1-.11.14l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.8.8 0 0 1 .14-.11 2.74 2.74 0 0 1-.36-1.36c0-.495.13-.959.36-1.36a.8.8 0 0 1-.14-.11l-1-1a.75.75 0 0 1 0-1.06M12.75 12a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M7 7.25a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 7 7.25"
    />
  </Svg>
);
export default SvgSafeCircle;
