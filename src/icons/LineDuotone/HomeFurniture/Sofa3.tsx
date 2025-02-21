import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSofa3 = (props: SvgProps) => (
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
      d="M4 18h16a2 2 0 1 0 0-4H4a2 2 0 1 0 0 4Z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="m4.5 14-.075-.299c-1.087-4.347-1.63-6.52-.56-8.023q.102-.142.216-.275C5.278 4 7.519 4 12 4s6.722 0 7.92 1.403q.112.133.214.275c1.07 1.502.527 3.676-.56 8.023L19.5 14"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M20 20v-2M4 20v-2"
      opacity={0.5}
    />
  </Svg>
);
export default SvgSofa3;
