import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowRightDown = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L17.25 16.1893L17.25 9C17.25 8.58579 17.5858 8.25 18 8.25C18.4142 8.25 18.75 8.58579 18.75 9L18.75 18C18.75 18.4142 18.4142 18.75 18 18.75L9 18.75C8.58579 18.75 8.25 18.4142 8.25 18C8.25 17.5858 8.58579 17.25 9 17.25L16.1893 17.25L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967Z"
      fill="black"
    />
  </Svg>
);
export default SvgArrowRightDown;
