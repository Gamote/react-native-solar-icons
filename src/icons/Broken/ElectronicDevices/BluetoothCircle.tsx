import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBluetoothCircle = (props: SvgProps) => (
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
      d="M14.2 9.593 11 12V7.623c0-.954 0-1.432.302-1.583.301-.151.682.135 1.444.708L14.2 7.842c.533.401.8.602.8.876 0 .273-.267.474-.8.875ZM14.2 16.158l-1.454 1.094c-.762.573-1.143.86-1.444.708C11 17.809 11 17.331 11 16.377V12l3.2 2.407c.533.401.8.602.8.875 0 .274-.267.475-.8.876Z"
    />
    <Path
      fill="#000"
      d="M8.48 8.924a.75.75 0 1 0-.96 1.152zm3 2.5-3-2.5-.96 1.152 3 2.5z"
    />
    <Path
      fill="#000"
      d="M8.48 15.076a.75.75 0 0 1-.96-1.152zm3-2.5-3 2.5-.96-1.152 3-2.5z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
    />
  </Svg>
);
export default SvgBluetoothCircle;
