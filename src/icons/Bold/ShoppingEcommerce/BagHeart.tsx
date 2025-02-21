import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBagHeart = (props: SvgProps) => (
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
      d="M8.25 6.015V5a3.75 3.75 0 1 1 7.5 0v1.015c1.287.039 2.075.177 2.676.676.833.692 1.053 1.862 1.492 4.203l.75 4c.617 3.292.925 4.938.026 6.022C19.794 22 18.119 22 14.77 22H9.23c-3.35 0-5.024 0-5.924-1.084s-.59-2.73.026-6.022l.75-4c.44-2.34.659-3.511 1.492-4.203.601-.499 1.389-.637 2.676-.676M9.75 5a2.25 2.25 0 0 1 4.5 0v1h-4.5zM9 13.197c0 .984 1.165 2.024 2.043 2.669.42.308.63.462.957.462.328 0 .537-.154.957-.462.878-.645 2.043-1.685 2.043-2.67 0-1.672-1.65-2.297-3-1.005-1.35-1.292-3-.668-3 1.006"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBagHeart;
