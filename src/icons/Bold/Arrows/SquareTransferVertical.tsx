import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSquareTransferVertical = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535m4.101-7.467a.75.75 0 0 0-1.13.987l3 3.437A.75.75 0 0 0 10.75 17V7a.75.75 0 0 0-1.5 0v8zm6.172-6.771A.75.75 0 0 0 13.25 7v10a.75.75 0 0 0 1.5 0V9l1.685 1.93a.75.75 0 0 0 1.13-.986l-3-3.437a.75.75 0 0 0-.828-.21"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSquareTransferVertical;
