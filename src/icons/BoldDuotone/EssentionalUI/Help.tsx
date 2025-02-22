import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHelp = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
      fill={props.primaryColor}
    />
    <Path
      d="M5.47924 19.5817L9.75198 15.309C9.33529 15.0253 8.97496 14.665 8.69128 14.2484L4.41856 18.5211C4.7452 18.9005 5.09982 19.2551 5.47924 19.5817Z"
      fill={props.primaryColor}
    />
    <Path
      d="M4.41846 5.47906L8.69119 9.75179C8.97485 9.3351 9.33516 8.97479 9.75185 8.69113L5.47912 4.4184C5.09971 4.74502 4.74509 5.09965 4.41846 5.47906Z"
      fill={props.primaryColor}
    />
    <Path
      d="M14.2484 8.69122L18.5211 4.4185C18.9005 4.74514 19.2551 5.09976 19.5818 5.47918L15.309 9.75192C15.0254 9.33523 14.6651 8.9749 14.2484 8.69122Z"
      fill={props.primaryColor}
    />
    <Path
      d="M19.5817 18.5209L15.3089 14.2482C15.0253 14.6649 14.665 15.0252 14.2483 15.3089L18.521 19.5816C18.9004 19.255 19.255 18.9004 19.5817 18.5209Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgHelp;
