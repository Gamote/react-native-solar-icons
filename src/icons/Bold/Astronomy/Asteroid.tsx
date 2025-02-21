import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAsteroid = (props: SvgProps) => (
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
      d="M2 12C2 6.477 6.477 2 12 2c2.127 0 4.098.664 5.719 1.796a6.752 6.752 0 0 0 3.936 10.82C20.505 18.87 16.618 22 12 22q-.96-.002-1.868-.174a6.75 6.75 0 0 0-8.117-9.279A10 10 0 0 1 2 12m14 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-5.5-5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M17.75 8c0-1.231.423-2.361 1.131-3.256a9.97 9.97 0 0 1 3.055 8.398A5.25 5.25 0 0 1 17.75 8M8.658 21.428a10.02 10.02 0 0 1-6.445-7.368l.111-.037a5.25 5.25 0 0 1 6.386 7.299z"
    />
  </Svg>
);
export default SvgAsteroid;
