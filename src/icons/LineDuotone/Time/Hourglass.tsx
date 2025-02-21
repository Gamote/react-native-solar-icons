import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHourglass = (props: SvgProps) => (
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
      d="M14.958 9.071 12 12 9.042 9.071C6.12 6.177 4.66 4.73 5.068 3.481q.052-.16.13-.312C5.8 2 7.867 2 12 2s6.2 0 6.802 1.17q.078.15.13.311c.41 1.249-1.052 2.696-3.974 5.59Z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M9.042 14.929 12 12l2.958 2.929c2.922 2.894 4.383 4.341 3.974 5.59a2 2 0 0 1-.13.312C18.2 22 16.133 22 12 22s-6.2 0-6.802-1.17a2 2 0 0 1-.13-.311c-.41-1.249 1.052-2.696 3.974-5.59Z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgHourglass;
