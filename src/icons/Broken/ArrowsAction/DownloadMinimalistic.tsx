import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDownloadMinimalistic = (props: SvgProps) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 3v13m0 0 4-4.375M12 16l-4-4.375M15 21H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15m18 0c0 2.828 0 4.243-.879 5.121-.3.3-.662.498-1.121.628"
    />
  </Svg>
);
export default SvgDownloadMinimalistic;
