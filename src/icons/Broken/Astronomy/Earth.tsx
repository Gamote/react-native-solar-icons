import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEarth = (props: SvgProps) => (
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
      d="M6 4.71c.78.711 2.388 2.653 2.575 4.737.125 1.395.82 2.603 1.925 3.184.439.23.942.363 1.5.369.755.008 1.518-.537 1.516-1.292 0-.233-.039-.472-.099-.692A1.41 1.41 0 0 1 13.5 10c.61-1.257 1.81-1.595 2.76-2.278.421-.303.806-.623.975-.88.469-.71.937-2.131.703-2.842"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 13c-.33.931-.562 3.375-4.282 3.414 0 0-.793 0-1.718.22m-2.563 1.642c-.791 1.49-.33 3.103 0 3.724"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M7 20.662A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5"
    />
  </Svg>
);
export default SvgEarth;
