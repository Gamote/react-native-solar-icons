import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgExit = (props: SvgProps) => (
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
      d="M9 4.5H8c-2.357 0-3.536 0-4.268.732S3 7.143 3 9.5v5c0 2.357 0 3.535.732 4.268S5.643 19.5 8 19.5h1"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M9 6.476c0-2.293 0-3.44.707-4.067s1.788-.439 3.95-.062l2.33.407c2.394.417 3.591.626 4.302 1.504.711.879.711 2.149.711 4.69v6.105c0 2.54 0 3.81-.71 4.689-.712.878-1.91 1.087-4.304 1.505l-2.328.406c-2.162.377-3.243.565-3.95-.062S9 19.817 9 17.524z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 11v2"
      opacity={0.5}
    />
  </Svg>
);
export default SvgExit;
