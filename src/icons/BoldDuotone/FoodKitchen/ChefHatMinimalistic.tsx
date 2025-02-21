import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChefHatMinimalistic = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M2 10a5 5 0 0 1 5.737-4.946 4.502 4.502 0 0 1 8.526 0Q16.623 5 17 5a5 5 0 0 1 2 9.584V18c0 1.886 0 2.828-.586 3.414S16.886 22 15 22H9c-1.886 0-2.828 0-3.414-.586S5 19.886 5 18v-3.416A5 5 0 0 1 2 10"
      opacity={0.5}
    />
    <Path fill="#000" d="M9 17.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" />
  </Svg>
);
export default SvgChefHatMinimalistic;
