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
      fill="#000"
      d="M16.951 8.25a.75.75 0 1 0 1.415-.5zM6.75 14.154V10h-1.5v4.154zm-1.5 0c0 .605-.49 1.096-1.096 1.096v1.5a2.596 2.596 0 0 0 2.596-2.596zm12 0a2.596 2.596 0 0 0 2.596 2.596v-1.5c-.605 0-1.096-.49-1.096-1.096zM12 3.25A6.75 6.75 0 0 0 5.25 10h1.5c0-2.9 2.35-5.25 5.25-5.25zm0 1.5c2.285 0 4.23 1.46 4.951 3.5l1.415-.5A6.75 6.75 0 0 0 12 3.25z"
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
