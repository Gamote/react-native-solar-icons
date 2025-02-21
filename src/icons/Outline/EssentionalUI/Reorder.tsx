import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgReorder = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.75 10C19.75 10.4142 19.4142 10.75 19 10.75L5 10.75C4.58579 10.75 4.25 10.4142 4.25 10C4.25 9.58579 4.58579 9.25 5 9.25L19 9.25C19.4142 9.25 19.75 9.58579 19.75 10Z"
      fill="black"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.75 14C19.75 14.4142 19.4142 14.75 19 14.75L5 14.75C4.58579 14.75 4.25 14.4142 4.25 14C4.25 13.5858 4.58579 13.25 5 13.25L19 13.25C19.4142 13.25 19.75 13.5858 19.75 14Z"
      fill="black"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.75 6C19.75 6.41421 19.4142 6.75 19 6.75L5 6.75C4.58579 6.75 4.25 6.41421 4.25 6C4.25 5.58579 4.58579 5.25 5 5.25L19 5.25C19.4142 5.25 19.75 5.58579 19.75 6Z"
      fill="black"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.75 18C19.75 18.4142 19.4142 18.75 19 18.75L5 18.75C4.58579 18.75 4.25 18.4142 4.25 18C4.25 17.5858 4.58579 17.25 5 17.25L19 17.25C19.4142 17.25 19.75 17.5858 19.75 18Z"
      fill="black"
    />
  </Svg>
);
export default SvgReorder;
