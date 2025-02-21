import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHomeAngle = (props: SvgProps) => (
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
      d="M2.364 12.958c-.38-2.637-.57-3.956-.029-5.083s1.691-1.812 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.082-1.906 6.093S16.552 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012-1.175-1.011-1.419-2.705-1.906-6.093z"
    />
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M15 18H9" />
  </Svg>
);
export default SvgHomeAngle;
