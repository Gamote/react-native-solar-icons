import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBell = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12 1.25A7.75 7.75 0 0 0 4.25 9v.704a3.53 3.53 0 0 1-.593 1.958L2.51 13.385c-1.333 2-.316 4.718 2.003 5.35q1.133.309 2.284.523l.002.005C7.567 21.315 9.622 22.75 12 22.75s4.433-1.435 5.202-3.487l.002-.005a29 29 0 0 0 2.284-.523c2.319-.632 3.337-3.35 2.003-5.35l-1.148-1.723a3.53 3.53 0 0 1-.593-1.958V9A7.75 7.75 0 0 0 12 1.25m3.377 18.287a28.5 28.5 0 0 1-6.753 0c.71 1.021 1.947 1.713 3.376 1.713s2.665-.692 3.377-1.713M5.75 9a6.25 6.25 0 0 1 12.5 0v.704c0 .993.294 1.964.845 2.79l1.149 1.723a2.02 2.02 0 0 1-1.15 3.071 26.96 26.96 0 0 1-14.188 0 2.02 2.02 0 0 1-1.15-3.07l1.15-1.724a5.03 5.03 0 0 0 .844-2.79z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBell;
