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
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M11.536 10.536a5 5 0 0 0-7.071-7.071m7.07 7.07a5 5 0 0 1-7.071-7.071m7.072 7.072L4.464 3.464M12 17c0 1.28.488 2.56 1.464 3.535A4.98 4.98 0 0 0 17 22m-5-5a5 5 0 1 1 10 0m-10 0h10m0 0c0 1.28-.488 2.56-1.465 3.535"
    />
  </Svg>
);
export default SvgPills2;
