import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTransmissionCircle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#1C274C"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M8 8.25a.75.75 0 0 1 .75.75v2.25h2.5V9a.75.75 0 0 1 1.5 0v2.25H13c.476 0 .796 0 1.043-.017.241-.017.358-.046.435-.078.307-.127.55-.37.677-.677.032-.077.061-.194.078-.435.017-.247.017-.567.017-1.043a.75.75 0 0 1 1.5 0v.025c0 .445 0 .816-.02 1.12a2.8 2.8 0 0 1-.19.907 2.75 2.75 0 0 1-1.488 1.489c-.29.12-.59.167-.907.188-.304.021-.675.021-1.12.021h-.275V15a.75.75 0 0 1-1.5 0v-2.25h-2.5V15a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 8 8.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTransmissionCircle;
