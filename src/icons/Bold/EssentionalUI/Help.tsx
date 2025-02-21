import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHelp = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M19.582 18.52A9.96 9.96 0 0 0 22 12a9.96 9.96 0 0 0-2.418-6.52l-4.273 4.272c.436.64.691 1.414.691 2.248s-.255 1.608-.691 2.248zM18.52 19.582A9.96 9.96 0 0 1 12 22a9.96 9.96 0 0 1-6.52-2.418l4.272-4.273c.64.436 1.414.691 2.248.691s1.608-.255 2.248-.691zM4.418 18.52l4.273-4.272A4 4 0 0 1 8 12c0-.834.255-1.607.691-2.248L4.418 5.479A9.96 9.96 0 0 0 2 12a9.96 9.96 0 0 0 2.418 6.52M12 8c-.834 0-1.607.255-2.248.691L5.479 4.418A9.96 9.96 0 0 1 12 2a9.96 9.96 0 0 1 6.52 2.418l-4.272 4.273A4 4 0 0 0 12 8"
    />
  </Svg>
);
export default SvgHelp;
