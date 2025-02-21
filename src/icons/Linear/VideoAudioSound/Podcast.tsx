import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPodcast = (props: SvgProps) => (
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
      d="M9 10a3 3 0 1 1 6 0v3a3 3 0 1 1-6 0z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13 10h2M13 13h2M9 10h1M9 13h1"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M4.154 16C5.174 16 6 15.173 6 14.154V10a6 6 0 0 1 12 0v4.154c0 1.02.826 1.846 1.846 1.846"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M2 12a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0zM18 12a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0z"
    />
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M12 16v3" />
  </Svg>
);
export default SvgPodcast;
