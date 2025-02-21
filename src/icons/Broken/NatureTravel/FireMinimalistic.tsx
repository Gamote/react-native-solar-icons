import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFireMinimalistic = (props: SvgProps) => (
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
      d="M16 19.997A8.4 8.4 0 0 1 12 21c-4.418 0-8-3.356-8-7.496 0-1.131.15-2.192.405-3.176m14.771 6.493c.528-1 .824-2.126.824-3.317 0-3.741-2.035-6.666-3.438-8.06-.26-.258-.694-.144-.84.189-.748 1.69-2.304 4.123-4.293 4.123-1.232.165-3.112-.888-1.594-6.107.137-.47-.365-.848-.749-.534A14.6 14.6 0 0 0 6 6.647"
    />
  </Svg>
);
export default SvgFireMinimalistic;
