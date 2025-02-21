import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUfo3 = (props: SvgProps) => (
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
      d="m3.636 20.364 4.121-4.121M10 22l2.707-2.222M2 14l2.222-2.707M7.856 4c1.15.089 2.579.636 4.09 1.56M5.275 6.582c.165 2.13 1.905 5.225 4.702 8.022C13.882 18.51 18.37 20.356 20 18.726c.826-.826.76-2.384-.014-4.23a14 14 0 0 0-.966-1.863m-4.802-2.271c-2.256-2.257-2.726-3.479-2.815-3.975-.032-.175.052-.336.178-.46a4.73 4.73 0 0 1 6.688 0l.384.384a4.73 4.73 0 0 1 0 6.688c-.124.126-.286.21-.46.178-.337-.06-1.008-.296-2.108-1.146"
    />
    <Path
      fill="#000"
      d="M13.029 13.271a1 1 0 1 1-1.415-1.414 1 1 0 0 1 1.414 1.414M10.2 9.029a1 1 0 1 1-1.414-1.415A1 1 0 0 1 10.2 9.03M17.271 16.1a1 1 0 1 1-1.414-1.415A1 1 0 0 1 17.27 16.1"
    />
  </Svg>
);
export default SvgUfo3;
