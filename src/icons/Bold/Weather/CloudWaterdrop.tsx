import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCloudWaterdrop = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M15 19.084C15 20.694 13.657 22 12 22s-3-1.305-3-2.916c0-.912.961-2.1 1.796-2.96a1.665 1.665 0 0 1 2.408 0c.835.86 1.796 2.048 1.796 2.96"
    />
    <Path
      fill="#000"
      d="M9.72 15.08c-.449.462-.968 1.048-1.384 1.674-.372.559-.808 1.362-.835 2.246H6.286C3.919 19 2 17.104 2 14.765s1.919-4.236 4.286-4.236q.427.001.83.08a5.6 5.6 0 0 1-.354-1.962C6.762 5.528 9.32 3 12.476 3c2.94 0 5.361 2.194 5.68 5.015C20.392 8.78 22 10.881 22 13.353c0 3.048-2.444 5.533-5.501 5.643-.028-.882-.464-1.684-.835-2.242-.416-.626-.935-1.212-1.384-1.674a3.165 3.165 0 0 0-4.56 0"
    />
  </Svg>
);
export default SvgCloudWaterdrop;
