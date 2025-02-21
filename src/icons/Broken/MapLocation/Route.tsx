import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoute = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <G clipPath="url(#clip0_1648_2867)">
      <Path
        d="M19.0711 4.92871C22.4044 8.26204 24.0711 9.92871 24.0711 11.9998C24.0711 14.0708 22.4044 15.7375 19.0711 19.0708C15.7378 22.4042 14.0711 24.0708 12 24.0708C9.92896 24.0708 8.26229 22.4042 4.92896 19.0708C1.59562 15.7375 -0.0710449 14.0708 -0.0710449 11.9998C-0.0710449 9.92871 1.59562 8.26204 4.92896 4.92871C8.26229 1.59538 9.92896 -0.0712891 12 -0.0712891C13.3771 -0.0712887 14.5754 0.665556 16.2037 2.13925"
        stroke="black"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M16 11.5L13.3333 9M16 11.5L13.3333 14M16 11.5L10.6667 11.5C9.77778 11.5 8 12 8 14"
        stroke="black"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1648_2867">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgRoute;
