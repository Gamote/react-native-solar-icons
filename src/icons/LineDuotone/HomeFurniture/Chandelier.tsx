import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChandelier = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M9 4H15"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M16 11.2C16 10.5373 16.5373 10 17.2 10H20.8C21.4627 10 22 10.5373 22 11.2V13C22 14.6569 20.6569 16 19 16C17.3431 16 16 14.6569 16 13V11.2Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M12 4V16.5M12 16.5C12 18.433 13.567 20 15.5 20C17.433 20 19 18.433 19 16.5V16.4444M12 16.5C12 18.433 10.433 20 8.5 20C6.567 20 5 18.433 5 16.5V16.4444"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M8 10.8571C8 10.3838 7.61624 10 7.14286 10H2.85714C2.38376 10 2 10.3838 2 10.8571V13C2 14.6569 3.34315 16 5 16C6.65685 16 8 14.6569 8 13V10.8571Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgChandelier;
