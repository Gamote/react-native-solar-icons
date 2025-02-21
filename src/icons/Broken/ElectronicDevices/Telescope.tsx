import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTelescope = (props: SvgProps) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.576 8.001c.857-.486 1.285-.729 1.397-1.141s-.135-.833-.629-1.675l-1.049-1.786c-.494-.841-.741-1.262-1.16-1.373-.42-.11-.848.133-1.705.619l-3.683 2.09c-.832.472-1.247.708-1.355 1.112-.109.405.133.817.617 1.64l1.12 1.908c.471.802.707 1.203 1.103 1.309s.8-.124 1.609-.583m-4.598-3.937-3.684 2.09c-.831.472-1.247.708-1.355 1.112s.134.816.618 1.64l.595 1.015c.472.802.707 1.203 1.103 1.309s.8-.124 1.61-.583l3.735-2.12m-7.809-.924-3.632 2.061c-.857.486-1.285.73-1.397 1.142s.135.833.629 1.675c.494.841.741 1.262 1.161 1.373s.848-.133 1.704-.619l3.633-2.062"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m12 12.5 4 9.5M12 12.5 8 22"
    />
  </Svg>
);
export default SvgTelescope;
