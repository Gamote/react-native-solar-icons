import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFloorLampMinimalistic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M9 22H15"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 22V13M12 8V10"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12.0001 8C14.3369 8 16.2992 6.71758 16.8475 4.98449C17.0141 4.45792 16.5524 4 16.0001 4H8.00009C7.4478 4 6.98608 4.45792 7.15266 4.98449C7.70094 6.71758 9.66331 8 12.0001 8Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M12 2C13.6569 2 15 2.89543 15 4H9C9 2.89543 10.3431 2 12 2Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M12 19V17.9368C12 16.6554 11.4101 15.4467 10.4035 14.6655L6.52181 11.8909M2.7793 11.6844L5.31139 8.44298M2.7793 11.6844C2.4297 12.132 2.50541 12.8018 3.03895 12.9887C4.2398 13.4094 5.62367 13.0438 6.45481 11.9798C6.47776 11.9505 6.50009 11.9208 6.52181 11.8909M2.7793 11.6844C1.89216 10.9789 1.73982 9.6814 2.43904 8.7863C3.13826 7.8912 4.42425 7.73749 5.31139 8.44298M5.31139 8.44298C5.661 7.99543 6.3242 7.9132 6.62898 8.39296C7.29602 9.44296 7.28701 10.8364 6.52181 11.8909"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgFloorLampMinimalistic;
