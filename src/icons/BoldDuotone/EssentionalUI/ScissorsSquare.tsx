import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgScissorsSquare = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M16.379 5.353a.75.75 0 0 0-1.026.268L12 11.346 8.647 5.62a.75.75 0 0 0-1.294.758l3.778 6.45-1.111 1.899a2.66 2.66 0 0 0-2.145-1.078c-1.42 0-2.625 1.113-2.625 2.55s1.204 2.55 2.625 2.55c.992 0 1.88-.543 2.324-1.36L12 14.314l1.802 3.076a2.65 2.65 0 0 0 2.323 1.36c1.42 0 2.625-1.113 2.625-2.55s-1.204-2.55-2.625-2.55c-.873 0-1.664.42-2.144 1.078l-1.112-1.898 3.778-6.45a.75.75 0 0 0-.268-1.027"
    />
  </Svg>
);
export default SvgScissorsSquare;
