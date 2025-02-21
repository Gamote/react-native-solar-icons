import * as React from "react";
import Svg, { Ellipse, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGolf = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Ellipse
      cx={12}
      cy={18.5}
      stroke="#000"
      strokeWidth={1.5}
      opacity={0.5}
      rx={10}
      ry={3.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 18V2M12 3.5l5.422 2.711c1.561.78 2.342 1.171 2.342 1.789s-.78 1.008-2.342 1.789L12 12.5"
    />
  </Svg>
);
export default SvgGolf;
