import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgScreenShare = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M8.141 4.5C8 5.343 8 6.462 8 8v8c0 1.538 0 2.657.141 3.5H8c-2.357 0-3.536 0-4.268-.732C3 18.035 3 16.857 3 14.5v-5c0-2.357 0-3.536.732-4.268S5.643 4.5 8 4.5z"
      opacity={0.5}
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M8.879 2.879C8 3.757 8 5.172 8 8v8c0 2.828 0 4.243.879 5.121C9.757 22 11.172 22 14 22h1c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2h-1c-2.828 0-4.243 0-5.121.879m6.151 4.59a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.061l1.22-1.22V16a.75.75 0 0 0 1.5 0V9.81l1.22 1.22a.75.75 0 1 0 1.06-1.06z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgScreenShare;
