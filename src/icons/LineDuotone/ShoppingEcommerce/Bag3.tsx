import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBag3 = (props: SvgProps) => (
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
      d="M3.742 18.555C4.942 20 7.174 20 11.639 20h.722c4.465 0 6.698 0 7.897-1.445m-16.516 0c-1.2-1.446-.788-3.64.034-8.03.586-3.12.878-4.681 1.99-5.603M3.741 18.555Zm16.516 0c1.2-1.446.789-3.64-.034-8.03-.586-3.12-.878-4.681-1.99-5.603m2.024 13.633ZM18.235 4.922C17.124 4 15.536 4 12.36 4h-.722c-3.175 0-4.763 0-5.874.922m12.47 0Zm-12.47 0Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9.17 8a3.001 3.001 0 0 0 5.66 0"
      opacity={0.5}
    />
  </Svg>
);
export default SvgBag3;
