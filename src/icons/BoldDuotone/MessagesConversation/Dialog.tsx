import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDialog = (props: SvgProps) => (
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
      d="M18 14a8 8 0 0 1-11.45 7.22 1.67 1.67 0 0 0-1.15-.13l-1.227.329a1.3 1.3 0 0 1-1.591-1.592L2.91 18.6a1.67 1.67 0 0 0-.13-1.15A8 8 0 1 1 18 14M6.5 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3.5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3.5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M17.984 14.508q.162-.066.32-.142c.29-.14.622-.189.934-.105l.996.267a1.056 1.056 0 0 0 1.293-1.294l-.266-.996a1.36 1.36 0 0 1 .105-.935A6.5 6.5 0 1 0 9.491 6.016Q9.744 6 10 6a8 8 0 0 1 7.984 8.508"
      opacity={0.6}
    />
  </Svg>
);
export default SvgDialog;
