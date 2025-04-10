import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVideocameraRecord = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17 9.50019L17.6584 9.17101C19.6042 8.19807 20.5772 7.7116 21.2886 8.15127C22 8.59094 22 9.67872 22 11.8543V12.1461C22 14.3217 22 15.4094 21.2886 15.8491C20.5772 16.2888 19.6042 15.8023 17.6584 14.8294L17 14.5002V9.50019Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.90796 5.46243C2 6.56878 2 8.21252 2 11.5V12.5C2 15.7875 2 17.4312 2.90796 18.5376C3.07418 18.7401 3.25989 18.9258 3.46243 19.092C4.56878 20 6.21252 20 9.5 20C12.7875 20 14.4312 20 15.5376 19.092C15.7401 18.9258 15.9258 18.7401 16.092 18.5376C17 17.4312 17 15.7875 17 12.5V11.5C17 8.21252 17 6.56878 16.092 5.46243C15.9258 5.25989 15.7401 5.07418 15.5376 4.90796C14.4312 4 12.7875 4 9.5 4C6.21252 4 4.56878 4 3.46243 4.90796C3.25989 5.07418 3.07418 5.25989 2.90796 5.46243Z"
      fill={props.primaryColor}
    />
    <Path
      d="M14 8.5C14 9.32843 13.3284 10 12.5 10C11.6716 10 11 9.32843 11 8.5C11 7.67157 11.6716 7 12.5 7C13.3284 7 14 7.67157 14 8.5Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgVideocameraRecord;
