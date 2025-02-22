import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBalloon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M11.9395 17.5002C16.0815 17.5337 19.5332 13.7028 19.4998 9.56076C19.4663 5.41877 16.0815 2.03392 11.9395 2.00049C7.79748 1.96707 4.46683 5.29773 4.50025 9.43972C4.53367 13.5817 7.79748 17.4668 11.9395 17.5002Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M15.5 9C15.4867 7.35641 14.1436 6.01326 12.5 6"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M12 19.8502C12.3212 19.8502 12.4818 19.8502 12.5933 19.8283C13.2466 19.6998 13.6441 19.0557 13.4511 18.4384C13.4181 18.333 13.342 18.1962 13.1896 17.9227M12 19.8502C11.6788 19.8502 11.5182 19.8502 11.4067 19.8283C10.7534 19.6998 10.3559 19.0557 10.5489 18.4384C10.5819 18.333 10.658 18.1962 10.8104 17.9227M12 19.8502V22"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgBalloon;
