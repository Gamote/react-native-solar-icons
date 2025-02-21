import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgServer = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 7C2 5.11438 2 4.17157 2.58579 3.58579C3.17157 3 4.11438 3 6 3H18C19.8856 3 20.8284 3 21.4142 3.58579C22 4.17157 22 5.11438 22 7C22 8.88562 22 9.82843 21.4142 10.4142C20.8284 11 19.8856 11 18 11H6C4.11438 11 3.17157 11 2.58579 10.4142C2 9.82843 2 8.88562 2 7ZM6 6.25C5.58579 6.25 5.25 6.58579 5.25 7C5.25 7.41421 5.58579 7.75 6 7.75H8C8.41421 7.75 8.75 7.41421 8.75 7C8.75 6.58579 8.41421 6.25 8 6.25H6ZM10.25 7C10.25 6.58579 10.5858 6.25 11 6.25H18C18.4142 6.25 18.75 6.58579 18.75 7C18.75 7.41421 18.4142 7.75 18 7.75H11C10.5858 7.75 10.25 7.41421 10.25 7Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 17C2 15.1144 2 14.1716 2.58579 13.5858C3.17157 13 4.11438 13 6 13H18C19.8856 13 20.8284 13 21.4142 13.5858C22 14.1716 22 15.1144 22 17C22 18.8856 22 19.8284 21.4142 20.4142C20.8284 21 19.8856 21 18 21H6C4.11438 21 3.17157 21 2.58579 20.4142C2 19.8284 2 18.8856 2 17ZM6 16.25C5.58579 16.25 5.25 16.5858 5.25 17C5.25 17.4142 5.58579 17.75 6 17.75H8C8.41421 17.75 8.75 17.4142 8.75 17C8.75 16.5858 8.41421 16.25 8 16.25H6ZM10.25 17C10.25 16.5858 10.5858 16.25 11 16.25H18C18.4142 16.25 18.75 16.5858 18.75 17C18.75 17.4142 18.4142 17.75 18 17.75H11C10.5858 17.75 10.25 17.4142 10.25 17Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgServer;
