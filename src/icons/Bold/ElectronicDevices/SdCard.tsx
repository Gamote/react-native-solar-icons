import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSdCard = (props: SvgProps) => (
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
      d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c.341 0 .512 0 .686.015.81.07 1.601.399 2.224.921.133.112.257.236.504.483l5.167 5.167c.247.247.37.37.483.504.522.623.85 1.415.92 2.224.016.174.016.345.016.686 0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m1-16.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75M10.75 6a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zM7 5.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V6A.75.75 0 0 1 7 5.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSdCard;
