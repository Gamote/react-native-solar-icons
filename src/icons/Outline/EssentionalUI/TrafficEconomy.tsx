import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTrafficEconomy = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M9.903 22.543A10.75 10.75 0 0 0 22.75 12a.75.75 0 0 0-1.5 0A9.25 9.25 0 1 1 12 2.75a.75.75 0 0 0 0-1.5 10.75 10.75 0 0 0-2.097 21.293"
    />
    <Path
      fill="#000"
      d="M12 8.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V15a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V9a.75.75 0 0 1 .75-.75M14.687 1.589a.75.75 0 1 0-.374 1.452 9.27 9.27 0 0 1 6.646 6.646.75.75 0 0 0 1.452-.374 10.77 10.77 0 0 0-7.724-7.724"
    />
  </Svg>
);
export default SvgTrafficEconomy;
