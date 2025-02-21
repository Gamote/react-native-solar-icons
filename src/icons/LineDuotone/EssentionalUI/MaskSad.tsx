import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMaskSad = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M21 12V6.71888C21 4.52896 21 3.434 20.2927 2.83487C19.5855 2.23574 18.5045 2.41591 16.3424 2.77626L15.288 2.95199C13.6477 3.22537 12.8276 3.36205 12 3.36205C11.1724 3.36205 10.3523 3.22537 8.71202 2.95199L7.6576 2.77626C5.49553 2.41591 4.4145 2.23574 3.70725 2.83487C3 3.434 3 4.52896 3 6.71888V12C3 17.4903 7.23896 20.1547 9.89856 21.286C10.62 21.5929 10.9807 21.7464 12 21.7464C13.0193 21.7464 13.38 21.5929 14.1014 21.286C16.761 20.1547 21 17.4903 21 12Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M6.5 9C6.79112 8.4174 7.57665 8 8.5 8C9.42335 8 10.2089 8.4174 10.5 9"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M13.5 9C13.7911 8.4174 14.5766 8 15.5 8C16.4234 8 17.2089 8.4174 17.5 9"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M8.5 15C8.5 15 9.55 14 12 14C14.45 14 15.5 15 15.5 15"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgMaskSad;
