import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBoltCircle = (props: SvgProps) => (
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
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m-.773 6.569-2.015 1.605c-.845.673-1.268 1.01-1.185 1.385l.004.019c.094.373.63.517 1.702.804.595.16.893.24 1.033.465l.007.012c.135.229.058.515-.095 1.087l-.04.15c-.426 1.586-.638 2.379-.229 2.635s1.06-.262 2.363-1.3l2.015-1.604c.846-.674 1.268-1.01 1.186-1.386l-.004-.019c-.095-.373-.63-.517-1.702-.804-.595-.16-.893-.24-1.033-.465l-.007-.012c-.135-.228-.058-.514.095-1.086l.04-.15c.425-1.586.638-2.38.229-2.636s-1.061.263-2.364 1.3"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBoltCircle;
