import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgIncognito = (props: SvgProps) => (
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
      d="M21 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M2 11h12m8 0h-4M4 11l.614-2.455c.545-2.183.818-3.274 1.632-3.91.76-.593 1.79-.632 3.754-.635m10 7-.614-2.455c-.546-2.183-.818-3.274-1.632-3.91-.76-.593-1.79-.632-3.754-.635"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M10 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m10 17.5.658-.33a3 3 0 0 1 2.684 0l.658.33"
    />
  </Svg>
);
export default SvgIncognito;
