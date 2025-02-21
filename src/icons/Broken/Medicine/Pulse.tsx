import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPulse = (props: SvgProps) => (
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
      d="M5 15h1.394c.786 0 1.18 0 1.511.178.332.177.55.504.986 1.158l.16.24c.422.634.633.95.92.934.286-.017.459-.357.803-1.037l1.966-3.876c.359-.707.538-1.06.831-1.072s.5.326.914 1.002l.637 1.04c.43.7.644 1.05.985 1.242.342.191.752.191 1.573.191H19"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"
    />
  </Svg>
);
export default SvgPulse;
