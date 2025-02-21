import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgClapperboardText = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M16.5401 2.08783C15.3293 2 13.8452 2 12 2H11.9014L8.40139 7.25002H13.0986L16.5401 2.08783Z"
      fill={props.primaryColor}
    />
    <Path
      d="M10.0957 2.00445C6.62194 2.03072 4.71683 2.2121 3.46447 3.46447C2.6068 4.32213 2.25143 5.48593 2.10418 7.25002H6.59861L10.0957 2.00445Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.02644 8.75002C2 9.68875 2 10.7633 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 10.7633 22 9.68875 21.9736 8.75002H2.02644ZM5.75 14C5.75 13.5858 6.08579 13.25 6.5 13.25H14.5C14.9142 13.25 15.25 13.5858 15.25 14C15.25 14.4142 14.9142 14.75 14.5 14.75H6.5C6.08579 14.75 5.75 14.4142 5.75 14ZM6.5 16.75C6.08579 16.75 5.75 17.0858 5.75 17.5C5.75 17.9142 6.08579 18.25 6.5 18.25H12C12.4142 18.25 12.75 17.9142 12.75 17.5C12.75 17.0858 12.4142 16.75 12 16.75H6.5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M20.5355 3.46447C21.3932 4.32213 21.7486 5.48593 21.8958 7.25002H14.9014L18.1987 2.30403C19.1924 2.51345 19.9382 2.86714 20.5355 3.46447Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgClapperboardText;
