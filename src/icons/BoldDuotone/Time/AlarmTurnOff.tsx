import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlarmTurnOff = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="#000" d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18" opacity={0.5} />
    <Path
      fill="#000"
      d="M14.651 10.349a.75.75 0 0 1 0 1.06L13.061 13l1.59 1.591a.75.75 0 0 1-1.06 1.06L12 14.062l-1.591 1.59a.75.75 0 1 1-1.06-1.06l1.59-1.59-1.59-1.592a.75.75 0 0 1 1.06-1.06l1.59 1.59 1.592-1.59a.75.75 0 0 1 1.06 0"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M8.24 2.34a.72.72 0 0 1-.232.996l-3.891 2.41a.734.734 0 0 1-1.006-.23.72.72 0 0 1 .232-.996l3.892-2.41a.734.734 0 0 1 1.006.23M15.76 2.34a.734.734 0 0 1 1.005-.23l3.892 2.41a.72.72 0 0 1 .232.996.734.734 0 0 1-1.006.23l-3.891-2.41a.72.72 0 0 1-.233-.996"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgAlarmTurnOff;
