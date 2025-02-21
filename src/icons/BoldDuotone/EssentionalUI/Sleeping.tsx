import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSleeping = (props: SvgProps) => (
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
      d="M2 5.25a.75.75 0 0 1 .75.75v9.25h19.893v.393l-.001.357v2a.75.75 0 1 1-1.5 0v-1.25H2.75V18a.75.75 0 0 1-1.5 0V6A.75.75 0 0 1 2 5.25"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M7 13.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M22.362 11.849a5 5 0 0 0-3.068-3.068c-.802-.281-1.8-.281-3.794-.281h-.002c-.798 0-1.838 0-2.159.112a2 2 0 0 0-1.227 1.227C12 10.16 12 10.56 12 11.357v3.893h10.643c-.001-1.737-.02-2.654-.28-3.401"
      opacity={0.5}
    />
  </Svg>
);
export default SvgSleeping;
