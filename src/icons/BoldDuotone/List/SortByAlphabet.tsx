import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSortByAlphabet = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.1839 6.69223C17.0628 6.42309 16.7951 6.25 16.4999 6.25C16.2048 6.25 15.9371 6.42309 15.816 6.69223L11.316 16.6922C11.146 17.07 11.3144 17.514 11.6922 17.6839C12.0699 17.8539 12.5139 17.6855 12.6839 17.3078L14.1212 14.1136H18.8786L20.316 17.3078C20.486 17.6855 20.93 17.8539 21.3077 17.6839C21.6854 17.514 21.8539 17.07 21.6839 16.6922L17.1839 6.69223ZM16.4999 8.82764L14.7962 12.6136H18.2036L16.4999 8.82764Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 7C2.25 6.58579 2.58579 6.25 3 6.25H13C13.4142 6.25 13.75 6.58579 13.75 7C13.75 7.41421 13.4142 7.75 13 7.75H3C2.58579 7.75 2.25 7.41421 2.25 7Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M2.25 12C2.25 11.5858 2.58579 11.25 3 11.25H10C10.4142 11.25 10.75 11.5858 10.75 12C10.75 12.4142 10.4142 12.75 10 12.75H3C2.58579 12.75 2.25 12.4142 2.25 12Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M2.25 17C2.25 16.5858 2.58579 16.25 3 16.25H8C8.41421 16.25 8.75 16.5858 8.75 17C8.75 17.4142 8.41421 17.75 8 17.75H3C2.58579 17.75 2.25 17.4142 2.25 17Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgSortByAlphabet;
