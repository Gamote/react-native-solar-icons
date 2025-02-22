import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTestTubeMinimalistic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3.18744 15.0484C1.60418 16.6387 1.60418 19.217 3.18744 20.8073C4.7707 22.3976 7.33768 22.3976 8.92094 20.8073L12.6667 17.045L10.8946 16.3094C10.1177 15.975 9.57994 15.2468 9.4866 14.4031C9.36539 13.3074 8.50424 12.4424 7.41335 12.3207H5.90317L3.18744 15.0484Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.3623 2.23307C13.6754 1.92134 14.1819 1.92246 14.4936 2.23556L21.7667 9.54081C22.0784 9.85392 22.0773 10.3605 21.7642 10.6722C21.4511 10.9839 20.9446 10.9828 20.6328 10.6697L13.3598 3.36444C13.048 3.05133 13.0492 2.5448 13.3623 2.23307Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M14.0901 4.09753L3.18744 15.0484C1.60419 16.6387 1.60419 19.217 3.18744 20.8073C4.7707 22.3975 7.33768 22.3975 8.92094 20.8073L19.8236 9.8564L14.0901 4.09753Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgTestTubeMinimalistic;
