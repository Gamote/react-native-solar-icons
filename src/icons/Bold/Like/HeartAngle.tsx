import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHeartAngle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M8.106 18.247C5.298 16.084 2 13.542 2 9.137 2 4.274 7.5.826 12 5.501L14 7.5a.75.75 0 0 0 1.06-1.061L13.13 4.507C17.369 1.403 22 4.675 22 9.137c0 4.405-3.298 6.947-6.106 9.11q-.44.337-.856.664C14 19.73 13 20.501 12 20.501s-2-.771-3.038-1.59q-.417-.328-.856-.664"
    />
  </Svg>
);
export default SvgHeartAngle;
