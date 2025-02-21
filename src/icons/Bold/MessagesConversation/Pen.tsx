import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPen = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="m11.4 18.161 7.396-7.396a10.3 10.3 0 0 1-3.326-2.234 10.3 10.3 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114M20.848 8.713a3.932 3.932 0 0 0-5.561-5.561l-.887.887.038.111a8.75 8.75 0 0 0 2.092 3.32 8.75 8.75 0 0 0 3.431 2.13z"
    />
  </Svg>
);
export default SvgPen;
