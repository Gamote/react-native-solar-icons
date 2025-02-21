import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChair2 = (props: SvgProps) => (
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
      d="M6 15.5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1 2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M15.79 2.496C15.04 2 14.026 2 12 2s-3.039 0-3.79.496a3 3 0 0 0-.638.566c-.582.687-.703 1.692-.944 3.704l-.09.757c-.251 2.088-.377 3.132.22 3.804.597.673 1.648.673 3.75.673h2.983c2.103 0 3.154 0 3.75-.673.598-.672.472-1.716.222-3.804l-.091-.757"
    />
    <Path stroke="#000" strokeWidth={1.5} d="M12 12v2" />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 22v-2m0 0v-2.5m0 2.5h.5c1 0 1.689 1.066 2 2M12 20h-.5c-1 0-1.689 1.066-2 2M6 15.5 5 13c-.5-1-1-1.5-3-1.5m16 4 1-2.5c.5-1 1-1.5 3-1.5"
    />
  </Svg>
);
export default SvgChair2;
