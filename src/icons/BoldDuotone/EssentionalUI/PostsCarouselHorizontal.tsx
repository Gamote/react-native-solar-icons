import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPostsCarouselHorizontal = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G fill="#000" opacity={0.5}>
      <Path d="M5.5 16V8a3 3 0 0 0-3-3 .5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5 3 3 0 0 0 3-3M18.5 8v8a3 3 0 0 0 3 3 .5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5 3 3 0 0 0-3 3" />
    </G>
    <Path
      fill="#000"
      d="M11.5 19c-1.886 0-2.828 0-3.414-.586S7.5 16.886 7.5 15V9c0-1.886 0-2.828.586-3.414S9.614 5 11.5 5h1c1.886 0 2.828 0 3.414.586S16.5 7.114 16.5 9v6c0 1.886 0 2.828-.586 3.414S14.386 19 12.5 19z"
    />
  </Svg>
);
export default SvgPostsCarouselHorizontal;
