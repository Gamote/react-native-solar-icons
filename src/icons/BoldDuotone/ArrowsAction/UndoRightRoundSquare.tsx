import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUndoRightRoundSquare = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.6989 6.91415C14.9799 6.60978 15.4543 6.5908 15.7587 6.87175L18.0087 8.94868C18.1625 9.09066 18.25 9.29045 18.25 9.49978C18.25 9.7091 18.1625 9.9089 18.0087 10.0509L15.7587 12.1278C15.4543 12.4088 14.9799 12.3898 14.6989 12.0854C14.4179 11.781 14.4369 11.3066 14.7413 11.0256L15.5818 10.2498H9.96155C8.464 10.2498 7.25 11.4638 7.25 12.9613C7.25 14.4589 8.464 15.6729 9.96154 15.6729H14.5C14.9142 15.6729 15.25 16.0086 15.25 16.4229C15.25 16.8371 14.9142 17.1729 14.5 17.1729H9.96154C7.63557 17.1729 5.75 15.2873 5.75 12.9613C5.75 10.6353 7.63558 8.74978 9.96155 8.74978H15.5818L14.7413 7.97396C14.4369 7.693 14.4179 7.21851 14.6989 6.91415Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgUndoRightRoundSquare;
