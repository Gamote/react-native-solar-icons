import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStream = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17 9.50019L17.6584 9.17101C19.6042 8.19807 20.5772 7.7116 21.2886 8.15127C22 8.59094 22 9.67872 22 11.8543V12.1461C22 14.3217 22 15.4094 21.2886 15.8491C20.5772 16.2888 19.6042 15.8023 17.6584 14.8294L17 14.5002V9.50019Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M9.5 15.5L9.5 8.5M9.5 8.5L12 11.5M9.5 8.5L7 11.5"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2 11.5V12.5C2 15.7875 2 17.4312 2.90796 18.5376C3.07418 18.7401 3.25989 18.9258 3.46243 19.092C4.56878 20 6.21252 20 9.5 20C12.7875 20 14.4312 20 15.5376 19.092C15.7401 18.9258 15.9258 18.7401 16.092 18.5376C17 17.4312 17 15.7875 17 12.5V11.5C17 8.21252 17 6.56878 16.092 5.46243C15.9258 5.25989 15.7401 5.07418 15.5376 4.90796C14.4312 4 12.7875 4 9.5 4C6.21252 4 4.56878 4 3.46243 4.90796C3.25989 5.07418 3.07418 5.25989 2.90796 5.46243C2.48014 5.98373 2.2539 6.62434 2.13427 7.5"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgStream;
