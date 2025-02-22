import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPassportMinimalistic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 10.75C10.7574 10.75 9.75 11.7574 9.75 13C9.75 14.2426 10.7574 15.25 12 15.25C13.2426 15.25 14.25 14.2426 14.25 13C14.25 11.7574 13.2426 10.75 12 10.75Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4.69434V18.6943C4 20.3512 5.34315 21.6943 7 21.6943H17C18.6569 21.6943 20 20.3512 20 18.6943V8.69434C20 7.03748 18.6569 5.69434 17 5.69434H5C4.44772 5.69434 4 5.24662 4 4.69434ZM12 9.25C9.92893 9.25 8.25 10.9289 8.25 13C8.25 15.0711 9.92893 16.75 12 16.75C14.0711 16.75 15.75 15.0711 15.75 13C15.75 10.9289 14.0711 9.25 12 9.25Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M18 4.00038V5.86504C17.6872 5.75449 17.3506 5.69434 17 5.69434H5C4.44772 5.69434 4 5.24662 4 4.69434V4.62329C4 4.09027 4.39193 3.63837 4.91959 3.56299L15.7172 2.02048C16.922 1.84835 18 2.78328 18 4.00038Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgPassportMinimalistic;
