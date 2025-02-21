import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlarmSleep = (props: SvgProps) => (
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
      d="M8.136 1.603a.75.75 0 0 1-.238 1.033l-4 2.5a.75.75 0 0 1-.796-1.272l4-2.5a.75.75 0 0 1 1.034.239m7.728 0a.75.75 0 0 1 1.034-.239l4 2.5a.75.75 0 0 1-.796 1.272l-4-2.5a.75.75 0 0 1-.238-1.033M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18M9 10.75a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .53 1.28l-4.72 4.72H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.53-1.28l4.72-4.72z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgAlarmSleep;
