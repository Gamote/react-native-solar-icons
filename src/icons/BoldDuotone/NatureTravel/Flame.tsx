import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFlame = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M20 15c0 4.255-2.618 6.122-4.641 6.751a.44.44 0 0 1-.233.012c-.289-.069-.432-.453-.224-.751.88-1.266 1.898-3.196 1.898-5.012 0-1.95-1.644-4.253-2.928-5.674-.293-.324-.805-.11-.821.328-.053 1.45-.282 3.388-1.268 4.908a.412.412 0 0 1-.677.036c-.308-.39-.616-.871-.924-1.252-.166-.204-.466-.207-.657-.026-.747.707-1.792 1.809-1.792 3.18 0 .93.36 1.905.767 2.69.202.39-.103.851-.482.77a.5.5 0 0 1-.122-.046C6.113 19.98 4 18.084 4 15c0-3.146 4.31-7.505 5.956-11.623.26-.65 1.06-.955 1.617-.531C14.943 5.414 20 10.378 20 15"
    />
    <Path
      fill="#000"
      d="M7.733 17.5c0 .93.36 1.905.767 2.69.202.39-.103.852-.482.77.482.54 3.658.957 7.108.803-.289-.069-.432-.453-.224-.751.88-1.265 1.898-3.196 1.898-5.012 0-1.95-1.644-4.253-2.928-5.674-.293-.324-.805-.11-.821.328-.053 1.45-.282 3.388-1.268 4.908a.412.412 0 0 1-.677.036c-.308-.39-.616-.871-.924-1.251-.166-.205-.466-.208-.657-.027-.747.707-1.792 1.809-1.792 3.18"
      opacity={0.5}
    />
  </Svg>
);
export default SvgFlame;
