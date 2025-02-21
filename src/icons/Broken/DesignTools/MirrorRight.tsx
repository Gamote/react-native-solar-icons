import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMirrorRight = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 21c4.243 0 6.364 0 7.682-1.318S21 16.242 21 12m-9-9c4.243 0 6.364 0 7.682 1.318.816.816 1.127 1.939 1.245 3.682"
    />
    <Path
      stroke="#000"
      strokeDasharray="2.5 3"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13 21H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15V9c0-2.828 0-4.243.879-5.121C4.757 3 6.172 3 9 3h4"
    />
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M12 22V2" />
  </Svg>
);
export default SvgMirrorRight;
