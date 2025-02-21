import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoundArrowLeftUp = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM14.25 9C14.25 8.58579 13.9142 8.25 13.5 8.25H9C8.58579 8.25 8.25 8.58579 8.25 9V13.5C8.25 13.9142 8.58579 14.25 9 14.25C9.41421 14.25 9.75 13.9142 9.75 13.5V10.8107L14.4697 15.5303C14.7626 15.8232 15.2374 15.8232 15.5303 15.5303C15.8232 15.2374 15.8232 14.7626 15.5303 14.4697L10.8107 9.75H13.5C13.9142 9.75 14.25 9.41421 14.25 9Z"
      fill="black"
    />
  </Svg>
);
export default SvgRoundArrowLeftUp;
