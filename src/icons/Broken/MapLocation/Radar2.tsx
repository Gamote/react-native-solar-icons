import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRadar2 = (props: SvgProps) => (
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
      d="M9.412 21.659q.796.212 1.588.292c4.795.488 9.372-2.558 10.66-7.363C23.088 9.253 19.922 3.77 14.587 2.34a9.97 9.97 0 0 0-7.501.95M12 12 5.002 6.335c-.43-.347-1.063-.283-1.366.178a10 10 0 0 0-1.295 2.898 10 10 0 0 0 2.661 9.734m2.367-10.96A6 6 0 1 0 17.811 10.5m-7.708-4.195A6 6 0 0 1 12 6c1.093 0 2.117.292 3 .802"
    />
  </Svg>
);
export default SvgRadar2;
