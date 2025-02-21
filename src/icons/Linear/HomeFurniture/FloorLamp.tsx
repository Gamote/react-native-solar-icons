import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFloorLamp = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M9 22H15"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 22V7"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 7C13.313 7 14.4289 6.15653 14.8356 4.98189C15.0163 4.46 14.5523 4 14 4H9.99999C9.44771 4 8.98368 4.46 9.16436 4.98189C9.57104 6.15653 10.687 7 12 7Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M12 2C13.1046 2 14 2.89543 14 4H10C10 2.89543 10.8954 2 12 2Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M12 18V16.9368C12 15.6554 11.4101 14.4467 10.4035 13.6655L6.52181 10.8909M2.7793 10.6844L5.31139 7.44298M2.7793 10.6844C2.4297 11.132 2.50541 11.8018 3.03895 11.9887C4.2398 12.4094 5.62367 12.0438 6.45481 10.9798C6.47776 10.9505 6.50009 10.9208 6.52181 10.8909M2.7793 10.6844C1.89216 9.97894 1.73982 8.6814 2.43904 7.7863C3.13826 6.8912 4.42425 6.73749 5.31139 7.44298M5.31139 7.44298C5.661 6.99543 6.3242 6.9132 6.62898 7.39296C7.29602 8.44296 7.28701 9.83644 6.52181 10.8909"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 18V16.9368C12 15.6554 12.5899 14.4467 13.5965 13.6655L17.4782 10.8909M21.2207 10.6844L18.6886 7.44298M21.2207 10.6844C21.5703 11.132 21.4946 11.8018 20.9611 11.9887C19.7602 12.4094 18.3763 12.0438 17.5452 10.9798C17.5222 10.9504 17.4999 10.9208 17.4782 10.8909M21.2207 10.6844C22.1078 9.97894 22.2602 8.6814 21.561 7.7863C20.8617 6.8912 19.5757 6.73749 18.6886 7.44298M18.6886 7.44298C18.339 6.99543 17.6758 6.9132 17.371 7.39296C16.704 8.44296 16.713 9.83644 17.4782 10.8909"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgFloorLamp;
