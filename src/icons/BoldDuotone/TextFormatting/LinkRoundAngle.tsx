import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLinkRoundAngle = (props: SvgProps) => (
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
      d="M2.277 7.934a6.75 6.75 0 0 0 4.398 11.513.75.75 0 1 0 .083-1.498 5.25 5.25 0 0 1-3.42-8.954l2.828-2.828a5.25 5.25 0 1 1 7.425 7.424l-1.414 1.414a.75.75 0 0 0 1.06 1.061l1.415-1.414a6.75 6.75 0 0 0-9.546-9.546z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M10.409 17.834a5.25 5.25 0 0 1 0-7.425l1.414-1.414a.75.75 0 0 0-1.06-1.06L9.348 9.347a6.75 6.75 0 1 0 9.546 9.546l2.829-2.828a6.75 6.75 0 0 0-4.398-11.513.75.75 0 1 0-.083 1.498 5.25 5.25 0 0 1 3.42 8.954l-2.828 2.829a5.25 5.25 0 0 1-7.425 0"
      opacity={0.5}
    />
  </Svg>
);
export default SvgLinkRoundAngle;
