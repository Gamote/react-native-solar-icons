import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMirror = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M5 9.5V19C5 19.6491 4.78947 20.2807 4.4 20.8L3.5 22M19 9.5V19C19 19.6491 19.2105 20.2807 19.6 20.8L20.5 22"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M18 9.5C18 13.6421 15.3137 17 12 17C8.68629 17 6 13.6421 6 9.5C6 5.35786 8.68629 2 12 2C15.3137 2 18 5.35786 18 9.5Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path d="M5 20H19" stroke={props.primaryColor} strokeWidth={1.5} />
    <Path
      d="M13 5.2561C13.9608 5.76552 14.697 6.98832 14.9257 8.50024"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgMirror;
