import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBluetoothSquare = (props: SvgProps) => (
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
      d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m11 12 2.933-2.2c.49-.367.734-.55.734-.8s-.245-.433-.734-.8l-1.333-1c-.698-.524-1.047-.786-1.324-.647C11 6.69 11 7.127 11 8zm0 0v4c0 .873 0 1.309.276 1.447.277.138.626-.123 1.324-.647l1.333-1c.49-.367.734-.55.734-.8s-.245-.434-.734-.8zm0 0L8 9.5m3 2.5-3 2.5"
      opacity={0.5}
    />
  </Svg>
);
export default SvgBluetoothSquare;
