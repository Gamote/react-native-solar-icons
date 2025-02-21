import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRewind10SecondsForward = (props: SvgProps) => (
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
      d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25a.75.75 0 0 1 .586 1.219l-2 2.5a.75.75 0 0 1-1.172-.938l.903-1.128C6.012 3.693 2.75 7.466 2.75 12A9.25 9.25 0 1 0 15.7 3.52a.75.75 0 0 1 .6-1.375A10.75 10.75 0 0 1 22.75 12c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12m9.075-4.176a.75.75 0 0 1 .425.676v7a.75.75 0 0 1-1.5 0v-5.44l-1.281 1.026a.75.75 0 0 1-.938-1.172l2.5-2a.75.75 0 0 1 .794-.09M14.25 9.25a1 1 0 0 0-1 1v3.5a1 1 0 1 0 2 0v-3.5a1 1 0 0 0-1-1m-2.5 1a2.5 2.5 0 0 1 5 0v3.5a2.5 2.5 0 0 1-5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgRewind10SecondsForward;
