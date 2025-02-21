import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgClapperboard = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M10.0957 2.00445C6.62201 2.03072 4.7169 2.2121 3.46453 3.46447C2.60687 4.32213 2.2515 5.48593 2.10425 7.25002H6.59868L10.0957 2.00445Z"
      fill={props.primaryColor}
    />
    <Path
      d="M21.8959 7.25002C21.7486 5.48593 21.3933 4.32213 20.5356 3.46447C19.9383 2.86714 19.1925 2.51345 18.1988 2.30403L14.9015 7.25002H21.8959Z"
      fill={props.primaryColor}
    />
    <Path
      d="M16.5401 2.08783C15.3294 2 13.8453 2 12.0001 2C11.9671 2 11.9342 2 11.9015 2L8.40146 7.25002H13.0987L16.5401 2.08783Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M2.02644 8.75C2 9.68872 2 10.7632 2 12C2 16.714 2 19.071 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.071 22 16.714 22 12C22 10.7632 22 9.68872 21.9736 8.75H2.02644Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgClapperboard;
