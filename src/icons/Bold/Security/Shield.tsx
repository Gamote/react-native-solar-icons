import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgShield = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M11.25 2.073c-.606.114-1.318.357-2.412.732L8.265 3C5.258 4.03 3.755 4.545 3.378 5.082 3.008 5.61 3 7.15 3 10.21l8.25-2.75zM11.25 9.04 3 11.79v.201c0 5.638 4.239 8.375 6.899 9.536.51.223.84.367 1.351.433zM12.75 21.96V9.04L21 11.79v.201c0 5.638-4.239 8.375-6.899 9.536-.51.223-.84.367-1.351.433M12.75 7.46V2.072c.606.114 1.318.357 2.412.732l.573.196c3.007 1.029 4.51 1.544 4.887 2.081.37.527.378 2.068.378 5.127z"
    />
  </Svg>
);
export default SvgShield;
