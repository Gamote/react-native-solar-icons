import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFaceScanCircle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5c0-.829.448-1.5 1-1.5s1 .671 1 1.5M10 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5C8 9.67 8.448 9 9 9s1 .671 1 1.5"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M13.265 2.05a.75.75 0 0 1 .884-.585 10.76 10.76 0 0 1 8.386 8.386.75.75 0 1 1-1.47.298 9.26 9.26 0 0 0-7.214-7.214.75.75 0 0 1-.586-.884m-2.53 0a.75.75 0 0 1-.586.885 9.26 9.26 0 0 0-7.214 7.214.75.75 0 0 1-1.47-.298 10.76 10.76 0 0 1 8.386-8.386.75.75 0 0 1 .884.586M2.051 13.266a.75.75 0 0 1 .884.586 9.26 9.26 0 0 0 7.215 7.214.75.75 0 0 1-.299 1.47 10.76 10.76 0 0 1-8.386-8.386.75.75 0 0 1 .586-.884m19.898 0a.75.75 0 0 1 .586.884 10.76 10.76 0 0 1-8.386 8.386.75.75 0 0 1-.298-1.47 9.26 9.26 0 0 0 7.214-7.214.75.75 0 0 1 .884-.586M8.397 15.553a.75.75 0 0 1 1.05-.156c.728.54 1.607.853 2.553.853s1.825-.313 2.553-.853a.75.75 0 1 1 .894 1.205A5.77 5.77 0 0 1 12 17.75a5.77 5.77 0 0 1-3.447-1.148.75.75 0 0 1-.156-1.049"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFaceScanCircle;
