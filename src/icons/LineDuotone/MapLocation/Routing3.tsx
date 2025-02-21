import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRouting3 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={5} cy={5} r={3} stroke="#000" strokeWidth={1.5} />
    <Circle cx={19} cy={19} r={3} stroke="#000" strokeWidth={1.5} />
    <Path
      fill="#000"
      d="M11 4.25a.75.75 0 0 0 0 1.5zM13 19l.53.53a.75.75 0 0 0 0-1.06zm4.206-10.313.402.633zM6.794 15.313l.403.632zm5.236 1.657a.75.75 0 0 0-1.06 1.06zm-1.06 3a.75.75 0 1 0 1.06 1.06zm5.162-15.72H11v1.5h5.132zM13 18.25H7.868v1.5H13zm3.803-10.195L6.392 14.68l.805 1.265L17.608 9.32zM13.53 18.47l-1.5-1.5-1.06 1.06 1.5 1.5zm-1.06 0-1.5 1.5 1.06 1.06 1.5-1.5zm-4.602-.22c-1.25 0-1.726-1.633-.671-2.305l-.805-1.265c-2.321 1.477-1.275 5.07 1.476 5.07zm8.264-12.5c1.25 0 1.726 1.633.671 2.305l.805 1.265c2.321-1.477 1.275-5.07-1.476-5.07z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgRouting3;
