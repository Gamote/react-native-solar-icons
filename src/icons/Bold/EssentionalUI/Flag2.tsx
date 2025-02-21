import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFlag2 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M5.75 1a.75.75 0 0 1 .75.75V3.6l1.72-.344a8.7 8.7 0 0 1 4.925.452l.413.165a7.3 7.3 0 0 0 4.482.304.73.73 0 0 1 .803 1.084l-1.278 2.131c-.342.57-.513.854-.553 1.163q-.025.195 0 .39c.04.309.211.594.553 1.163l1.56 2.6a.9.9 0 0 1-.553 1.336l-.1.025a8.68 8.68 0 0 1-5.327-.361 8.68 8.68 0 0 0-4.924-.452L6.5 13.6v8.15a.75.75 0 0 1-1.5 0v-20A.75.75 0 0 1 5.75 1"
    />
  </Svg>
);
export default SvgFlag2;
