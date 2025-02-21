import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBlackHole3 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M8.92762 12.4529C9.3338 13.2885 9.9443 13.9944 10.7532 14.395C9.96022 14.5776 9.04298 14.6153 8.1052 14.4824C5.31415 14.087 2.75 12.2842 2.75 9C2.75 8.58579 2.41421 8.25 2 8.25C1.58579 8.25 1.25 8.58579 1.25 9C1.25 13.3158 4.68585 15.513 7.8948 15.9676C9.50716 16.196 11.1645 16.0102 12.4529 15.3839C13.3211 14.9619 14.0493 14.3192 14.4405 13.4626C14.583 14.2041 14.6034 15.041 14.4824 15.8948C14.087 18.6858 12.2842 21.25 9 21.25C8.58579 21.25 8.25 21.5858 8.25 22C8.25 22.4142 8.58579 22.75 9 22.75C13.3158 22.75 15.513 19.3142 15.9676 16.1052C16.196 14.4928 16.0102 12.8355 15.3839 11.5471C15.0377 10.835 14.5432 10.2171 13.9039 9.80205C14.5291 9.72593 15.2064 9.73159 15.8948 9.82911C18.6858 10.2245 21.25 12.0274 21.25 15.3115C21.25 15.7257 21.5858 16.0615 22 16.0615C22.4142 16.0615 22.75 15.7257 22.75 15.3115C22.75 10.9957 19.3141 8.79854 16.1052 8.34394C14.4928 8.11552 12.8355 8.30132 11.5471 8.92762C10.8555 9.26381 10.2527 9.73999 9.83837 10.3528C9.72613 9.6583 9.71808 8.88892 9.82911 8.1052C10.2245 5.31415 12.0274 2.75 15.3115 2.75C15.7257 2.75 16.0615 2.41421 16.0615 2C16.0615 1.58579 15.7257 1.25 15.3115 1.25C10.9957 1.25 8.79854 4.68585 8.34394 7.8948C8.11552 9.50716 8.30132 11.1645 8.92762 12.4529Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgBlackHole3;
