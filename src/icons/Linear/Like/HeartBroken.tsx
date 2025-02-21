import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHeartBroken = (props: SvgProps) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 5.5C7.5.827 2 4.275 2 9.138s4.02 7.455 6.962 9.774C10 19.73 11 20.501 12 20.501m0-15C16.5.826 22 4.274 22 9.137s-4.02 7.455-6.962 9.774C14 19.73 13 20.501 12 20.501m0-15-1.5 3L14 11l-3 3.5 2 2-1 4"
    />
  </Svg>
);
export default SvgHeartBroken;
