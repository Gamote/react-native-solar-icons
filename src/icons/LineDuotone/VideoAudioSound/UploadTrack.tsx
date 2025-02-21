import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUploadTrack = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M12 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM12 15V9"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m14.058 11.03-1.316-.659c-.183-.091-.274-.137-.35-.194a1 1 0 0 1-.374-.607C12 9.477 12 9.375 12 9.171c0-.486 0-.728.06-.893a1 1 0 0 1 1.056-.653c.174.02.391.129.826.346l1.316.658c.183.092.274.137.35.195a1 1 0 0 1 .374.606c.018.093.018.195.018.4 0 .485 0 .728-.06.893a1 1 0 0 1-1.056.652c-.174-.02-.391-.129-.826-.346Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 22v-7m0 0 2.5 2.5M18 15l-2.5 2.5"
    />
    <Circle
      cx={12}
      cy={12}
      r={10}
      stroke="#000"
      strokeWidth={1.5}
      opacity={0.5}
    />
  </Svg>
);
export default SvgUploadTrack;
