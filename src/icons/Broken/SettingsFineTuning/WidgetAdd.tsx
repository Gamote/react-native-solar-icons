import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWidgetAdd = (props: SvgProps) => (
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
      d="M14.5 6.5h3m0 0h3m-3 0v3m0-3v-3M2.55 15.5c.065-.65.21-1.088.536-1.414.586-.586 1.528-.586 3.414-.586s2.828 0 3.414.586.586 1.528.586 3.414 0 2.828-.586 3.414-1.528.586-3.414.586-2.828 0-3.414-.586c-.31-.31-.456-.718-.524-1.313"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M2.5 6.5c0-1.886 0-2.828.586-3.414S4.614 2.5 6.5 2.5s2.828 0 3.414.586.586 1.528.586 3.414 0 2.828-.586 3.414-1.528.586-3.414.586-2.828 0-3.414-.586S2.5 8.386 2.5 6.5ZM13.5 17.5c0-1.886 0-2.828.586-3.414s1.528-.586 3.414-.586 2.828 0 3.414.586.586 1.528.586 3.414 0 2.828-.586 3.414-1.528.586-3.414.586-2.828 0-3.414-.586-.586-1.528-.586-3.414Z"
    />
  </Svg>
);
export default SvgWidgetAdd;
