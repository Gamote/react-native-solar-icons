import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRulerPen = (props: SvgProps) => (
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
      d="M16 22c-1.886 0-2.828 0-3.414-.586S12 19.886 12 18V6c0-1.886 0-2.828.586-3.414S14.114 2 16 2h2c1.886 0 2.828 0 3.414.586S22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414S19.886 22 18 22z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 12h2m-2-6h2m-2 12h2m-2-3h3m-3-6h3"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="m6.012 21.027-.288.548A.81.81 0 0 1 5 22a.81.81 0 0 1-.724-.425l-.288-.548m2.024 0H3.988m2.024 0 1.18-2.242c.279-.53.418-.794.52-1.07q.184-.488.25-1.004C8 16.421 8 16.125 8 15.534V4.85C8 3.276 6.657 2 5 2S2 3.276 2 4.85v10.684c0 .591 0 .887.038 1.177q.067.516.25 1.005c.102.275.241.54.52 1.069l1.18 2.242"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M2 5.8s1.125.95 3 .95 3-.95 3-.95"
      opacity={0.5}
    />
  </Svg>
);
export default SvgRulerPen;
