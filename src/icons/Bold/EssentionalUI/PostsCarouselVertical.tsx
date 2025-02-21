import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPostsCarouselVertical = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M8 5.5h8a3 3 0 0 0 3-3 .5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5 3 3 0 0 0 3 3M5 11.5c0-1.886 0-2.828.586-3.414S7.114 7.5 9 7.5h6c1.886 0 2.828 0 3.414.586S19 9.614 19 11.5v1c0 1.886 0 2.828-.586 3.414S16.886 16.5 15 16.5H9c-1.886 0-2.828 0-3.414-.586S5 14.386 5 12.5zM16 18.5H8a3 3 0 0 0-3 3 .5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5 3 3 0 0 0-3-3"
    />
  </Svg>
);
export default SvgPostsCarouselVertical;
