import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGamepadCharge = (props: SvgProps) => (
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
      d="m10.165 4.78.502.354a2.31 2.31 0 0 0 2.666 0l.502-.355A4.24 4.24 0 0 1 16.285 4h.612c.405 0 .813.025 1.194.16 2.383.846 4.021 3.935 3.903 10.943-.024 1.412-.354 2.972-1.628 3.581a3.2 3.2 0 0 1-1.393.316 2.74 2.74 0 0 1-1.53-.437c-.915-.599-1.584-1.6-2.554-2.102a4.1 4.1 0 0 0-1.89-.461H11c-.658 0-1.306.158-1.89.46-.97.504-1.64 1.504-2.553 2.103A2.74 2.74 0 0 1 5.027 19a3.2 3.2 0 0 1-1.393-.316c-1.274-.609-1.604-2.17-1.628-3.581C1.887 8.095 3.526 5.006 5.909 4.16 6.29 4.025 6.7 4 7.103 4h.612c.878 0 1.734.272 2.45.78Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 22v-3"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10.5 16.5V18a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.5"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M7.5 9v3M6 10.5h3"
      opacity={0.5}
    />
    <G fill="#000" opacity={0.5}>
      <Path d="M19 10.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M16 10.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M16.75 8a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M16.75 11a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5" />
    </G>
  </Svg>
);
export default SvgGamepadCharge;
