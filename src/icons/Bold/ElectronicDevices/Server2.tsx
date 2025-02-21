import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgServer2 = (props: SvgProps) => (
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
      d="M2.586 3.586C2 4.172 2 5.114 2 7s0 2.828.586 3.414S4.114 11 6 11h12c1.886 0 2.828 0 3.414-.586S22 8.886 22 7s0-2.828-.586-3.414S19.886 3 18 3H6c-1.886 0-2.828 0-3.414.586M9 8.75A.75.75 0 0 1 8.25 8V6a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75m4.5-2.5a.75.75 0 0 0 0 1.5H18a.75.75 0 0 0 0-1.5zM6 8.75A.75.75 0 0 1 5.25 8V6a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75M2.586 13.586C2 14.172 2 15.114 2 17s0 2.828.586 3.414S4.114 21 6 21h12c1.886 0 2.828 0 3.414-.586S22 18.886 22 17s0-2.828-.586-3.414S19.886 13 18 13H6c-1.886 0-2.828 0-3.414.586M12.75 17a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75m-7.5 1a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0zm3.75.75a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgServer2;
