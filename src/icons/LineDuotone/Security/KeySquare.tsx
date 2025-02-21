import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgKeySquare = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.208 13.552A3.784 3.784 0 0 0 18 9.776 3.784 3.784 0 0 0 14.208 6a3.784 3.784 0 0 0-3.791 3.776c0 .966.44 1.669.44 1.669L6.274 16.01c-.206.205-.494.738 0 1.23l.529.526c.205.176.723.422 1.146 0l.617-.614c.617.614 1.323.263 1.587-.088.441-.615-.088-1.23-.088-1.23l.177-.175c.846.843 1.587.351 1.851 0 .441-.615 0-1.23 0-1.23-.176-.351-.529-.351-.088-.79l.53-.527c.422.351 1.292.44 1.674.44Z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgKeySquare;
