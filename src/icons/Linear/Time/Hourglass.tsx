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
      d="m12 12-2.958 2.929c-2.922 2.894-4.383 4.341-3.974 5.59q.052.16.13.312C5.8 22 7.867 22 12 22s6.2 0 6.802-1.17q.078-.15.13-.311c.41-1.249-1.052-2.696-3.974-5.59zm0 0 2.958-2.929c2.922-2.894 4.383-4.341 3.974-5.59a2 2 0 0 0-.13-.312C18.2 2 16.133 2 12 2S5.8 2 5.198 3.17q-.078.15-.13.311c-.41 1.249 1.052 2.696 3.974 5.59z"
    />
  </Svg>
);
export default SvgHourglass;
