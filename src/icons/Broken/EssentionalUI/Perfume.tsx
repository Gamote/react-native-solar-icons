import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPerfume = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M7 5.42168V5C7 3.58579 7 2.87868 7.43934 2.43934C7.87868 2 8.58579 2 10 2C11.4142 2 12.1213 2 12.5607 2.43934C13 2.87868 13 3.58579 13 5V5.42168V7H7V5.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13 7H7"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7 5.00021C7.55228 5.00021 8 5.05228 8 4.5C8 3.94772 7.55228 4.00035 7 4.00035"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M2.16133 16C2.05554 15.5138 2 15.0105 2 14.495C2 10.3556 5.58172 7 10 7C14.4183 7 18 10.3556 18 14.495C18 16.4098 17.2336 18.1569 15.9725 19.4817C15.5224 19.9546 15.2973 20.191 14.3538 20.5955C13.4102 21 12.7596 21 11.4584 21H8.5416C7.24039 21 6.58979 21 5.64624 20.5955C5.38106 20.4818 5.17262 20.3814 5 20.2853"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M2.5 13C3.93501 13.5805 5.64292 14.7308 7.86069 14.9805C10.3509 15.2609 11.8549 13.5843 14 13.2947"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M13.5 5H14.3197C15.0959 5 15.8615 5.18073 16.5557 5.52786L17.5 6"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M20.5 5.24977C21.6958 5.94012 22.2174 7.27523 21.6651 8.23182C21.1128 9.1884 19.6958 9.40422 18.5 8.71387C17.3043 8.02351 16.7827 6.6884 17.335 5.73182C17.8872 4.77523 19.3043 4.55941 20.5 5.24977Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgPerfume;
