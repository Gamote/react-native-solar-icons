import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCalculator = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M4.31802 20.5355C5.63604 22 7.75736 22 12 22C16.2426 22 18.364 22 19.682 20.5355C21 19.0711 21 16.714 21 12C21 7.28595 21 4.92893 19.682 3.46447C18.364 2 16.2426 2 12 2C7.75736 2 5.63604 2 4.31802 3.46447C3 4.92893 3 7.28595 3 12C3 16.714 3 19.0711 4.31802 20.5355Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M7 8C7 7.53501 7 7.30252 7.05111 7.11177C7.18981 6.59413 7.59413 6.18981 8.11177 6.05111C8.30252 6 8.53501 6 9 6H15C15.465 6 15.6975 6 15.8882 6.05111C16.4059 6.18981 16.8102 6.59413 16.9489 7.11177C17 7.30252 17 7.53501 17 8C17 8.46499 17 8.69748 16.9489 8.88823C16.8102 9.40587 16.4059 9.81019 15.8882 9.94889C15.6975 10 15.465 10 15 10H9C8.53501 10 8.30252 10 8.11177 9.94889C7.59413 9.81019 7.18981 9.40587 7.05111 8.88823C7 8.69748 7 8.46499 7 8Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Circle cx={8} cy={13} r={1} fill="black" />
    <Circle cx={8} cy={17} r={1} fill="black" />
    <Circle cx={12} cy={13} r={1} fill="black" />
    <Circle cx={12} cy={17} r={1} fill="black" />
    <Circle cx={16} cy={13} r={1} fill="black" />
    <Circle cx={16} cy={17} r={1} fill="black" />
  </Svg>
);
export default SvgCalculator;
