import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLaptop = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="m21.391 16.336.088.092a2 2 0 0 1 .52 1.284l.001.127c0 .15 0 .224-.004.287a2 2 0 0 1-1.87 1.87 5 5 0 0 1-.287.004H4.161c-.15 0-.224 0-.287-.004a2 2 0 0 1-1.87-1.87C2 18.063 2 17.988 2 17.84l.001-.127a2 2 0 0 1 .608-1.376L3.903 15h16.194zM8.75 18a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75M4.353 7c0-1.886 0-2.828.586-3.414S6.467 3 8.353 3h7.294c1.886 0 2.829 0 3.414.586.586.586.586 1.528.586 3.414v7H4.353zM12 6.5A.75.75 0 1 0 12 5a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgLaptop;
