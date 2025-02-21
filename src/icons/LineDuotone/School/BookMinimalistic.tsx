import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBookMinimalistic = (props: SvgProps) => (
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
      d="M4 8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8v8c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16z"
    />
    <Path
      fill="#000"
      d="m6.121 16.102-.194-.724zM3.276 18.03a.75.75 0 0 0 1.448.389zM6.25 16a.75.75 0 0 0 1.5 0zm1.5-13.5a.75.75 0 0 0-1.5 0zm.148 14.25h12v-1.5h-12zm0-1.5c-.882 0-1.47-.006-1.97.128l.387 1.449c.263-.07.605-.077 1.583-.077zm-1.97.128a3.75 3.75 0 0 0-2.652 2.651l1.448.389a2.25 2.25 0 0 1 1.591-1.591zM7.75 16V2.5h-1.5V16z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgBookMinimalistic;
