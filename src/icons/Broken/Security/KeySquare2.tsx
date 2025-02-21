import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgKeySquare2 = (props: SvgProps) => (
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
      d="M17.26 11.44c2.618 0 4.74-2.113 4.74-4.72S19.878 2 17.26 2c-2.617 0-4.739 2.113-4.739 4.72 0 1.208.551 2.086.551 2.086l-5.731 5.708c-.257.256-.617.922 0 1.537l.661.658c.257.22.904.527 1.433 0l.771-.768c.772.768 1.654.329 1.984-.11.552-.768-.11-1.537-.11-1.537l.22-.22c1.059 1.054 1.985.44 2.315 0 .551-.768 0-1.536 0-1.536-.22-.44-.661-.44-.11-.988l.661-.659c.53.44 1.617.55 2.095.55Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M2 11.99c0 4.719 0 7.078 1.466 8.544S7.29 22 12.01 22s7.078 0 8.544-1.466c1.115-1.115 1.382-2.747 1.446-5.541M9.007 2c-2.794.064-4.426.33-5.541 1.446-.977.977-1.303 2.35-1.412 4.554"
    />
  </Svg>
);
export default SvgKeySquare2;
