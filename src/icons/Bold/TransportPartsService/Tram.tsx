import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTram = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#1C274C"
      fillRule="evenodd"
      d="M6.376 19.572c-.478-.17-.87-.41-1.204-.744-.975-.974-1.139-2.442-1.166-5.078h15.988c-.027 2.636-.191 4.104-1.166 5.078a3.15 3.15 0 0 1-1.203.744l1.046 2.093a.75.75 0 0 1-1.342.67l-1.224-2.447C15.057 20 13.726 20 12 20s-3.057 0-4.105-.112L6.67 22.336a.75.75 0 0 1-1.342-.671zM14.75 16a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75M7 15.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
    <Path
      fill="#1C274C"
      d="M20 12.25V10c0-3.771 0-5.657-1.172-6.828-.878-.88-2.16-1.099-4.336-1.154A.48.48 0 0 0 14 2.5a2 2 0 1 1-4 0 .48.48 0 0 0-.492-.482c-2.177.055-3.458.275-4.336 1.154C4 4.343 4 6.229 4 10v2.25z"
    />
  </Svg>
);
export default SvgTram;
