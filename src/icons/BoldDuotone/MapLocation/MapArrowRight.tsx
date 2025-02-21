import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMapArrowRight = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M14.143 15.962a.5.5 0 0 1-.244.68l-9.402 4.193c-1.495.667-3.047-.814-2.306-2.202l3.152-5.904c.245-.459.245-1 0-1.458L2.191 5.367c-.74-1.388.81-2.87 2.306-2.202l3.525 1.572a2 2 0 0 1 .974.932z"
    />
    <Path
      fill="#000"
      d="M15.534 15.39a.5.5 0 0 0 .65.233l4.823-2.15c1.324-.59 1.324-2.355 0-2.945L12.11 6.56a.5.5 0 0 0-.65.68z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgMapArrowRight;
