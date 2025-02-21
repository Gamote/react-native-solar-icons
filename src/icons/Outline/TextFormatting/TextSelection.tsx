import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTextSelection = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M9 8.25a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0V9.75H15a.75.75 0 0 0 0-1.5z"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M3.25 6.646A2.751 2.751 0 1 1 6.646 3.25h10.708a2.751 2.751 0 1 1 3.396 3.396v10.708a2.751 2.751 0 1 1-3.396 3.396H6.646a2.751 2.751 0 1 1-3.396-3.396zM4 2.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m.75 14.604V6.646A2.76 2.76 0 0 0 6.646 4.75h10.708c.259.916.98 1.637 1.896 1.896v10.708a2.76 2.76 0 0 0-1.896 1.896H6.646a2.76 2.76 0 0 0-1.896-1.896M4 18.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M21.25 4a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m-2.5 16a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTextSelection;
