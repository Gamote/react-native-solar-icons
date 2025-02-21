import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBicyclingRound = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M16 4C16 5.10457 15.1046 6 14 6C12.8954 6 12 5.10457 12 4C12 2.89543 12.8954 2 14 2C15.1046 2 16 2.89543 16 4Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.919 8.50596C10.0125 7.78435 8.67587 8.04212 8.10274 9.04908C7.54795 10.0238 7.96038 11.2644 8.98833 11.713L12.079 13.0616C13.4092 13.6421 14.0214 15.1873 13.4497 16.5213L12.6894 18.2954C12.5262 18.6762 12.0853 18.8525 11.7046 18.6894C11.3238 18.5262 11.1475 18.0853 11.3106 17.7046L12.071 15.9304C12.3179 15.3544 12.0535 14.6871 11.4791 14.4364L8.38842 13.0878C6.54363 12.2828 5.80347 10.0564 6.79911 8.30709C7.82766 6.49997 10.2264 6.03738 11.8532 7.3324L14.0116 9.05057C14.1738 9.1797 14.375 9.25 14.5823 9.25H18.5C18.9142 9.25 19.25 9.58579 19.25 10C19.25 10.4142 18.9142 10.75 18.5 10.75H14.5823C14.0356 10.75 13.5051 10.5646 13.0773 10.2241L10.919 8.50596ZM6 15.75C4.75736 15.75 3.75 16.7574 3.75 18C3.75 19.2426 4.75736 20.25 6 20.25C7.24264 20.25 8.25 19.2426 8.25 18C8.25 16.7574 7.24264 15.75 6 15.75ZM2.25 18C2.25 15.9289 3.92893 14.25 6 14.25C8.07107 14.25 9.75 15.9289 9.75 18C9.75 20.0711 8.07107 21.75 6 21.75C3.92893 21.75 2.25 20.0711 2.25 18ZM18 15.75C16.7574 15.75 15.75 16.7574 15.75 18C15.75 19.2426 16.7574 20.25 18 20.25C19.2426 20.25 20.25 19.2426 20.25 18C20.25 16.7574 19.2426 15.75 18 15.75ZM14.25 18C14.25 15.9289 15.9289 14.25 18 14.25C20.0711 14.25 21.75 15.9289 21.75 18C21.75 20.0711 20.0711 21.75 18 21.75C15.9289 21.75 14.25 20.0711 14.25 18Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgBicyclingRound;
