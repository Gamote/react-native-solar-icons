import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBagMusic2 = (props: SvgProps) => (
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
      d="M3.742 20.555C4.942 22 7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445m-16.516 0c-1.2-1.446-.788-3.64.034-8.03.586-3.12.878-4.681 1.99-5.603M3.741 20.555Zm16.516 0c1.2-1.446.789-3.64-.034-8.03-.586-3.12-.878-4.681-1.99-5.603m2.024 13.633ZM18.235 6.922C17.124 6 15.536 6 12.36 6h-.722c-3.175 0-4.763 0-5.874.922m12.47 0Zm-12.47 0Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9 6V5a3 3 0 1 1 6 0v1"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0v-6a2 2 0 0 0 2 2"
      opacity={0.5}
    />
  </Svg>
);
export default SvgBagMusic2;
