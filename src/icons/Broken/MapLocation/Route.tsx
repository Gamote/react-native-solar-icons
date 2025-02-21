import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoute = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      clipPath="url(#Route_svg__a)"
    >
      <Path d="M19.071 4.929c3.333 3.333 5 5 5 7.07 0 2.072-1.667 3.739-5 7.072s-5 5-7.071 5-3.738-1.667-7.071-5-5-5-5-7.071 1.667-3.738 5-7.071c3.333-3.334 5-5 7.071-5 1.377 0 2.575.737 4.204 2.21" />
      <Path
        strokeLinejoin="round"
        d="M16 11.5 13.333 9M16 11.5 13.333 14M16 11.5h-5.333C9.777 11.5 8 12 8 14"
      />
    </G>
    <Defs>
      <ClipPath id="Route_svg__a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgRoute;
