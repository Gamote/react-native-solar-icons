import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPills2 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M12.026 9.965a5 5 0 0 0-6.992-6.992zM10.965 11.026a5 5 0 0 1-6.991-6.992zM21.944 16.25a5 5 0 0 0-9.887 0zM21.944 17.75h-9.888a5 5 0 0 0 9.888 0"
    />
  </Svg>
);
export default SvgPills2;
