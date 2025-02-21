import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSiren = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M20 21.25V16C20 13.1997 20 11.7996 19.455 10.73C18.9757 9.78924 18.2108 9.02433 17.27 8.54497C16.2004 8 14.8003 8 12 8C9.19974 8 7.79961 8 6.73005 8.54497C5.78924 9.02433 5.02433 9.78924 4.54497 10.73C4 11.7996 4 13.1997 4 16V21.25H20Z"
      fill={props.primaryColor}
    />
    <Path
      d="M14.25 10.8149C14.25 10.4007 14.5858 10.0649 15 10.0649C16.618 10.0649 17.9963 11.3367 17.9346 13.0274C17.9195 13.4413 17.5717 13.7646 17.1577 13.7495C16.7438 13.7344 16.4205 13.3866 16.4356 12.9727C16.4637 12.2034 15.842 11.5649 15 11.5649C14.5858 11.5649 14.25 11.2292 14.25 10.8149Z"
      fill={props.primaryColor}
    />
    <Path
      d="M4 21.25H2C1.58579 21.25 1.25 21.5858 1.25 22C1.25 22.4142 1.58579 22.75 2 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22C22.75 21.5858 22.4142 21.25 22 21.25H20H4Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12.75 18.7993C13.1984 18.54 13.5 18.0552 13.5 17.5C13.5 16.6716 12.8284 16 12 16C11.1716 16 10.5 16.6716 10.5 17.5C10.5 18.0552 10.8016 18.54 11.25 18.7993V21.25H12.75V18.7993Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V5C12.75 5.41421 12.4142 5.75 12 5.75C11.5858 5.75 11.25 5.41421 11.25 5V2C11.25 1.58579 11.5858 1.25 12 1.25Z"
      fill={props.primaryColor}
    />
    <Path
      d="M21.5303 5.53033L20.0303 7.03033C19.7374 7.32322 19.2626 7.32322 18.9697 7.03033C18.6768 6.73744 18.6768 6.26256 18.9697 5.96967L20.4697 4.46967C20.7626 4.17678 21.2374 4.17678 21.5303 4.46967C21.8232 4.76256 21.8232 5.23744 21.5303 5.53033Z"
      fill={props.primaryColor}
    />
    <Path
      d="M3.53033 4.46967C3.23744 4.17678 2.76256 4.17678 2.46967 4.46967C2.17678 4.76256 2.17678 5.23744 2.46967 5.53033L3.96967 7.03033C4.26256 7.32322 4.73744 7.32322 5.03033 7.03033C5.32322 6.73744 5.32322 6.26256 5.03033 5.96967L3.53033 4.46967Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgSiren;
