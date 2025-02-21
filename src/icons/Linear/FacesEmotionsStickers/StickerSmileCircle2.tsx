import * as React from "react";
import Svg, { Path, Ellipse } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStickerSmileCircle2 = (props: SvgProps) => (
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
      d="M2 12c0 5.523 4.477 10 10 10 .648 0 1.25-.3 1.708-.758l7.534-7.534C21.7 13.25 22 12.648 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 17c-1.115 0-2.15-.37-3-1"
    />
    <Ellipse cx={15} cy={10.5} fill="#000" rx={1} ry={1.5} />
    <Ellipse cx={9} cy={10.5} fill="#000" rx={1} ry={1.5} />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M12 22c0-2.793 0-4.19.393-5.312a7 7 0 0 1 4.295-4.295C17.811 12 19.208 12 22 12"
    />
  </Svg>
);
export default SvgStickerSmileCircle2;
