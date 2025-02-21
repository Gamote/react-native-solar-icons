import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgShareCircle = (props: SvgProps) => (
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
      d="M15.75 6a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0M12 3.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5M9.25 18a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0M5.5 15.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5M18.5 14.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5M20.75 18a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M7.205 7.562a.75.75 0 0 0-.993-1.124A8.73 8.73 0 0 0 3.25 13a.75.75 0 0 0 1.5 0 7.23 7.23 0 0 1 2.455-5.438M17.788 6.438a.75.75 0 0 0-.993 1.124A7.23 7.23 0 0 1 19.25 13a.75.75 0 0 0 1.5 0 8.73 8.73 0 0 0-2.962-6.562M10.187 20.022a.75.75 0 1 0-.374 1.452c.7.18 1.433.276 2.187.276s1.487-.096 2.187-.276a.75.75 0 1 0-.374-1.452A7.3 7.3 0 0 1 12 20.25c-.627 0-1.234-.08-1.813-.228"
    />
  </Svg>
);
export default SvgShareCircle;
