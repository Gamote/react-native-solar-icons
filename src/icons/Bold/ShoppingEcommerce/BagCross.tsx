import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBagCross = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M8.25 6.015V5a3.75 3.75 0 1 1 7.5 0v1.015c1.287.039 2.075.177 2.676.676.833.692 1.053 1.862 1.492 4.203l.75 4c.617 3.292.925 4.938.026 6.022C19.794 22 18.119 22 14.77 22H9.23c-3.35 0-5.024 0-5.924-1.084s-.59-2.73.026-6.022l.75-4c.44-2.34.659-3.511 1.492-4.203.601-.499 1.389-.637 2.676-.676M9.75 5a2.25 2.25 0 0 1 4.5 0v1h-4.5zm-1.28 5.47a.75.75 0 0 1 1.06 0L12 12.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L13.06 14l2.47 2.47a.75.75 0 0 1-1.06 1.06L12 15.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L10.94 14l-2.47-2.47a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBagCross;
