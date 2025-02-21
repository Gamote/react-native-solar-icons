import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPostsCarouselHorizontal = (props: SvgProps) => (
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
      strokeWidth={1.5}
      d="M22 19h-.5a2.5 2.5 0 0 1-2.5-2.5v-9A2.5 2.5 0 0 1 21.5 5h.5M2 19h.5A2.5 2.5 0 0 0 5 16.5v-9A2.5 2.5 0 0 0 2.5 5H2M15 5.126c.387.084.68.225.914.46.586.585.586 1.528.586 3.414v6c0 1.885 0 2.828-.586 3.414S14.385 19 12.5 19h-1c-1.886 0-2.829 0-3.414-.586C7.5 17.828 7.5 16.885 7.5 15V9c0-1.886 0-2.829.586-3.414C8.617 5.054 9.443 5.005 11 5"
    />
  </Svg>
);
export default SvgPostsCarouselHorizontal;
