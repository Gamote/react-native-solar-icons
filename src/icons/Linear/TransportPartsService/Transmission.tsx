import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTransmission = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M6 4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20C2 18.8954 2.89543 18 4 18C5.10457 18 6 18.8954 6 20Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M14 20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20C10 18.8954 10.8954 18 12 18C13.1046 18 14 18.8954 14 20Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M22 4C22 5.10457 21.1046 6 20 6C18.8954 6 18 5.10457 18 4C18 2.89543 18.8954 2 20 2C21.1046 2 22 2.89543 22 4Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M4 6V18"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 6V18"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M20 6V8C20 9.88562 20 10.8284 19.4142 11.4142C18.8284 12 17.8856 12 16 12H4"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M18 15V14.25C17.5858 14.25 17.25 14.5858 17.25 15H18ZM17.25 22C17.25 22.4142 17.5858 22.75 18 22.75C18.4142 22.75 18.75 22.4142 18.75 22H17.25ZM21.3604 22.3916C21.5766 22.7449 22.0384 22.8559 22.3916 22.6396C22.7449 22.4234 22.8559 21.9616 22.6396 21.6084L21.3604 22.3916ZM18 15.75H20.2857V14.25H18V15.75ZM18.75 18.5V15H17.25V18.5H18.75ZM21.25 16.75C21.25 17.3169 20.8038 17.75 20.2857 17.75V19.25C21.6612 19.25 22.75 18.1161 22.75 16.75H21.25ZM20.2857 15.75C20.8038 15.75 21.25 16.1831 21.25 16.75H22.75C22.75 15.3839 21.6612 14.25 20.2857 14.25V15.75ZM20.2857 17.75H19.8571V19.25H20.2857V17.75ZM19.8571 17.75H18V19.25H19.8571V17.75ZM19.2175 18.8916L21.3604 22.3916L22.6396 21.6084L20.4968 18.1084L19.2175 18.8916ZM17.25 18.5V22H18.75V18.5H17.25Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgTransmission;
