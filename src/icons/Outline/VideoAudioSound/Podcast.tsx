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
      fill="#000"
      fillRule="evenodd"
      d="M5.264 9.557a6.75 6.75 0 0 1 13.472 0A2.75 2.75 0 0 1 22.75 12v2a2.75 2.75 0 0 1-2.904 2.746v.004a2.596 2.596 0 0 1-2.596-2.596V10a5.25 5.25 0 0 0-10.5 0v4.154a2.596 2.596 0 0 1-2.596 2.596v-.004q-.076.004-.154.004A2.75 2.75 0 0 1 1.25 14v-2a2.75 2.75 0 0 1 4.014-2.443M5.25 12a1.25 1.25 0 0 0-2.5.001v2a1.25 1.25 0 0 0 2.5 0zm3-1.999a3.75 3.75 0 1 1 7.5 0v3a3.75 3.75 0 0 1-3 3.675V19a.75.75 0 0 1-1.5 0v-2.325a3.75 3.75 0 0 1-3-3.675zm1.628-.75H10a.75.75 0 0 1 0 1.5h-.25v1.5H10a.75.75 0 0 1 0 1.5h-.122a2.25 2.25 0 0 0 4.244 0H13a.75.75 0 0 1 0-1.5h1.25v-1.5H13a.75.75 0 0 1 0-1.5h1.122a2.251 2.251 0 0 0-4.244 0M20 10.75c-.69 0-1.25.56-1.25 1.25v2a1.25 1.25 0 1 0 2.5 0v-2c0-.69-.56-1.25-1.25-1.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPodcast;
