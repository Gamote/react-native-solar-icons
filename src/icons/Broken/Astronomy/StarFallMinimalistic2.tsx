import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStarFallMinimalistic2 = (props: SvgProps) => (
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
      d="M9.232 8.618c-1.968.445-2.952.667-3.186 1.42s.437 1.537 1.778 3.106l.347.406c.381.445.572.668.658.944.085.276.057.573-.001 1.168l-.052.541c-.203 2.094-.305 3.14.308 3.605s1.534.041 3.377-.807l.476-.22c.524-.24.786-.361 1.063-.361s.54.12 1.063.361l.476.22c1.843.848 2.764 1.272 3.377.807s.511-1.511.308-3.605m.952-3.06c1.341-1.568 2.012-2.352 1.778-3.105s-1.218-.975-3.186-1.42l-.509-.116c-.559-.126-.838-.19-1.063-.36s-.368-.428-.656-.945l-.262-.47C15.264 4.909 14.758 4 14 4s-1.264.909-2.277 2.727M2.089 16a4.74 4.74 0 0 1 4-.874M2.089 10.5c1-.5 1.29-.44 2-.5M2 5.609l.208-.122c2.206-1.292 4.542-1.64 6.745-1.005l.208.06"
    />
  </Svg>
);
export default SvgStarFallMinimalistic2;
