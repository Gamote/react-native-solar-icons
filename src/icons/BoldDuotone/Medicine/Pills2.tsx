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
      d="M13.465 20.536a5 5 0 1 0 7.07-7.071 5 5 0 0 0-7.07 7.07M3 7a5 5 0 1 0 10 0A5 5 0 0 0 3 7"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M12.056 17.75h9.888a5 5 0 0 0 0-1.5h-9.888a5 5 0 0 0 0 1.5M3.974 4.035l6.991 6.991a5 5 0 0 0 1.061-1.06L5.035 2.973a5 5 0 0 0-1.061 1.06"
    />
  </Svg>
);
export default SvgPills2;
