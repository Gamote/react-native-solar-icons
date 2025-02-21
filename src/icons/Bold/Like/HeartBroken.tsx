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
      fill="#000"
      d="M8.106 18.247C5.298 16.084 2 13.542 2 9.137c0-4.6 4.923-7.935 9.264-4.323L9.81 8.204a.75.75 0 0 0 .253.907l2.833 2.023-2.466 2.878a.75.75 0 0 0 .039 1.019l1.7 1.7-.91 3.64c-.756-.254-1.516-.843-2.298-1.46q-.417-.328-.856-.664"
    />
    <Path
      fill="#000"
      d="M12.812 20.346c.732-.266 1.469-.838 2.226-1.435q.417-.328.856-.664C18.702 16.084 22 13.542 22 9.137c0-4.515-4.741-7.81-9.02-4.518l-1.553 3.622 3.009 2.149a.75.75 0 0 1 .133 1.098l-2.548 2.973 1.51 1.509a.75.75 0 0 1 .197.712z"
    />
  </Svg>
);
export default SvgHeartBroken;
