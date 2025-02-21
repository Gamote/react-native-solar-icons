import * as React from "react";
import Svg, { Path, Ellipse } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStickerSmileCircle = (props: SvgProps) => (
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
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8.913 15.933a8.1 8.1 0 0 0 3.356.1"
    />
    <Ellipse
      cx={14.509}
      cy={9.775}
      fill="#000"
      rx={1}
      ry={1.5}
      transform="rotate(-15 14.51 9.775)"
    />
    <Ellipse
      cx={8.714}
      cy={11.328}
      fill="#000"
      rx={1}
      ry={1.5}
      transform="rotate(-15 8.714 11.328)"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M12 22c0-2.793 0-4.19.393-5.312a7 7 0 0 1 4.295-4.295C17.811 12 19.208 12 22 12"
    />
  </Svg>
);
export default SvgStickerSmileCircle;
