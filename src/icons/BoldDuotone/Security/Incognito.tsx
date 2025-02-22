import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgIncognito = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M21 16.5C21 18.433 19.433 20 17.5 20C15.567 20 14 18.433 14 16.5C14 14.567 15.567 13 17.5 13C19.433 13 21 14.567 21 16.5Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.25 10C1.25 9.58579 1.58579 9.25 2 9.25H22C22.4142 9.25 22.75 9.58579 22.75 10C22.75 10.4142 22.4142 10.75 22 10.75H2C1.58579 10.75 1.25 10.4142 1.25 10Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M4.1875 9.25L4.6138 7.54479C5.15947 5.36211 5.43231 4.27077 6.24609 3.63538C7.05988 3 8.1848 3 10.4347 3H13.5653C15.8152 3 16.9401 3 17.7539 3.63538C18.5677 4.27077 18.8405 5.36211 19.3862 7.54479L19.8125 9.25H4.1875Z"
      fill={props.primaryColor}
    />
    <Path
      d="M10 16.5C10 18.433 8.433 20 6.5 20C4.567 20 3 18.433 3 16.5C3 14.567 4.567 13 6.5 13C8.433 13 10 14.567 10 16.5Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M9.88403 17.3966C9.95964 17.1104 9.99992 16.8099 9.99992 16.5C9.99992 16.2272 9.9687 15.9616 9.90963 15.7067L10.3232 15.4999C11.379 14.972 12.6216 14.972 13.6773 15.4999L14.0903 15.7064C14.0312 15.9614 13.9999 16.227 13.9999 16.5C13.9999 16.8098 14.0402 17.1101 14.1157 17.3961L13.0065 16.8415C12.3731 16.5248 11.6275 16.5248 10.9941 16.8415L9.88403 17.3966Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgIncognito;
