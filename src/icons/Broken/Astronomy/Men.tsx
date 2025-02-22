import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMen = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M6 7.07026C7.17669 6.38958 8.54285 6 10 6C14.4183 6 18 9.58172 18 14C18 18.4183 14.4183 22 10 22C5.58172 22 2 18.4183 2 14C2 12.5429 2.38958 11.1767 3.07026 10"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M22 2H22.75C22.75 1.58579 22.4142 1.25 22 1.25V2ZM21.25 7C21.25 7.41421 21.5858 7.75 22 7.75C22.4142 7.75 22.75 7.41421 22.75 7H21.25ZM17 1.25C16.5858 1.25 16.25 1.58579 16.25 2C16.25 2.41421 16.5858 2.75 17 2.75V1.25ZM16.0303 9.03033L22.5303 2.53033L21.4697 1.46967L14.9697 7.96967L16.0303 9.03033ZM21.25 2V7H22.75V2H21.25ZM17 2.75H22V1.25H17V2.75Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgMen;
