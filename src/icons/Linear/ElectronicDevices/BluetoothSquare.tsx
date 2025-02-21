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
      d="M13.933 9.8 11 12V8c0-.873 0-1.31.276-1.447.277-.139.626.123 1.324.647l1.333 1c.49.367.734.55.734.8s-.245.433-.734.8ZM13.933 15.8l-1.333 1c-.698.524-1.047.785-1.324.647C11 17.31 11 16.873 11 16v-4l2.933 2.2c.49.367.734.55.734.8s-.245.433-.734.8Z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
    />
    <Path
      fill="#000"
      d="M8.48 8.924a.75.75 0 1 0-.96 1.152zm3 2.5-3-2.5-.96 1.152 3 2.5z"
    />
    <Path
      fill="#000"
      d="M8.48 15.076a.75.75 0 0 1-.96-1.152zm3-2.5-3 2.5-.96-1.152 3-2.5z"
    />
  </Svg>
);
export default SvgBluetoothSquare;
