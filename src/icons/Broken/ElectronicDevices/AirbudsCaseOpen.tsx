import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAirbudsCaseOpen = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3.95491 19.9389C4.26331 20.3634 4.6366 20.7367 5.06107 21.0451C6.3754 22 8.25027 22 12 22C15.7497 22 17.6246 22 18.9389 21.0451C19.3634 20.7367 19.7367 20.3634 20.0451 19.9389C21 18.6246 21 16.7497 21 13V12.8333C21 12.0515 21 11.6605 20.7934 11.3912C20.7402 11.3219 20.6781 11.2598 20.6088 11.2066C20.3395 11 19.9485 11 19.1667 11H4.83333C4.05147 11 3.66055 11 3.39124 11.2066C3.32191 11.2598 3.25985 11.3219 3.20665 11.3912C3 11.6605 3 12.0515 3 12.8333V13C3 14.1689 3 15.1557 3.02893 16"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M3.5 5.94143V4.625C3.5 3.17525 4.67525 2 6.125 2C8.54125 2 10.5 3.95875 10.5 6.375V11H6.79412V9.23555C6.79412 8.78072 6.42541 8.41202 5.97059 8.41202C4.60612 8.41202 3.5 7.3059 3.5 5.94143Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M20.5 5.94143V4.625C20.5 3.17525 19.3247 2 17.875 2C15.4588 2 13.5 3.95875 13.5 6.375V11H17.2059V9.23555C17.2059 8.78072 17.5746 8.41202 18.0294 8.41202C19.3939 8.41202 20.5 7.3059 20.5 5.94143Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M8 11C8 12.1046 8.89543 13 10 13H14C15.1046 13 16 12.1046 16 11"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgAirbudsCaseOpen;
