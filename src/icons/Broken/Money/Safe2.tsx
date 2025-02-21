import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSafe2 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="#000" d="M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M12 12V8M12 12l3.5 1.5M12 12l-3.5 1.5"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M4.5 7v3M4.5 14v3M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 5C8.7 5 7.05 5 6.025 6.025S5 8.7 5 12s0 4.95 1.025 5.975S8.7 19 12 19s4.95 0 5.975-1.025S19 15.3 19 12s0-4.95-1.025-5.975c-.682-.681-1.64-.91-3.175-.986"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10 8.535A4 4 0 1 1 8.126 11"
    />
  </Svg>
);
export default SvgSafe2;
