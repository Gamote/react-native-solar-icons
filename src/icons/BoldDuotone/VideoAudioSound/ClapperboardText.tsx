import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgClapperboardText = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M16.5401 2.08783C15.3294 2 13.8453 2 12.0001 2H11.9015L8.40146 7.25002H13.0987L16.5401 2.08783Z"
      fill={props.primaryColor}
    />
    <Path
      d="M10.0957 2.00445C6.62201 2.03072 4.7169 2.2121 3.46453 3.46447C2.60687 4.32213 2.2515 5.48593 2.10425 7.25002H6.59868L10.0957 2.00445Z"
      fill={props.primaryColor}
    />
    <Path
      d="M20.5356 3.46447C21.3933 4.32213 21.7486 5.48593 21.8959 7.25002H14.9015L18.1988 2.30403C19.1925 2.51345 19.9383 2.86714 20.5356 3.46447Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M2 12C2 10.7632 2 9.68872 2.02644 8.75H21.9736C22 9.68872 22 10.7632 22 12C22 16.714 22 19.071 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.071 2 16.714 2 12Z"
      fill={props.primaryColor}
    />
    <Path
      d="M5.75 17.5C5.75 17.0858 6.08579 16.75 6.5 16.75H12C12.4142 16.75 12.75 17.0858 12.75 17.5C12.75 17.9142 12.4142 18.25 12 18.25H6.5C6.08579 18.25 5.75 17.9142 5.75 17.5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M6.5 13.25C6.08579 13.25 5.75 13.5858 5.75 14C5.75 14.4142 6.08579 14.75 6.5 14.75H14.5C14.9142 14.75 15.25 14.4142 15.25 14C15.25 13.5858 14.9142 13.25 14.5 13.25H6.5Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgClapperboardText;
