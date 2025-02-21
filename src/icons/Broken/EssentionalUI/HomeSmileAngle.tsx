import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHomeSmileAngle = (props: SvgProps) => (
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
      d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m21.636 12.958-.279 1.938c-.487 3.387-.731 5.08-1.906 6.092S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012-1.175-1.011-1.419-2.705-1.906-6.092l-.279-1.938c-.38-2.637-.57-3.955-.029-5.083.54-1.127 1.691-1.812 3.992-3.183l1.385-.825C9.8 2.623 10.846 2 12 2s2.199.623 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183"
    />
  </Svg>
);
export default SvgHomeSmileAngle;
