import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRestartCircle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M16.728 6a.75.75 0 0 0-1.5 0v1.023a5.665 5.665 0 0 0-7.3.715c-2.237 2.29-2.237 5.997 0 8.287a5.67 5.67 0 0 0 8.144 0 5.93 5.93 0 0 0 1.634-4.874.75.75 0 0 0-1.49.182c.16 1.3-.25 2.653-1.217 3.644a4.17 4.17 0 0 1-5.998 0c-1.668-1.708-1.668-4.483 0-6.19a4.17 4.17 0 0 1 4.883-.822h-.558a.75.75 0 0 0 0 1.5h2.651a.75.75 0 0 0 .75-.75z"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgRestartCircle;
