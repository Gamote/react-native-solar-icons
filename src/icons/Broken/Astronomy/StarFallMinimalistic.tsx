import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStarFallMinimalistic = (props: SvgProps) => (
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
      d="M8.322 14.493c-.942 1.493-1.413 2.24-1.092 2.85s1.22.68 3.021.821l.466.037c.512.04.768.06.991.177.224.118.39.32.723.723l.302.367c1.17 1.421 1.754 2.131 2.421 2.04s.975-.924 1.59-2.589l.16-.43c.174-.473.261-.71.433-.882.172-.171.408-.259.881-.433l.43-.16c1.666-.615 2.498-.922 2.59-1.59.09-.666-.62-1.251-2.04-2.42m-1.304-2.482c-.14-1.8-.211-2.701-.822-3.022-.61-.32-1.357.15-2.85 1.092l-.386.244c-.424.268-.636.401-.88.435-.245.033-.494-.037-.992-.179l-.453-.129c-1.751-.497-2.627-.746-3.096-.277s-.22 1.344.278 3.096M13.5 6.5 13 6M9.5 2.5l2 2M6.5 6.5 4 4M6 12l-1.5-1.5M2 8l.5.5"
    />
  </Svg>
);
export default SvgStarFallMinimalistic;
