import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSmartphoneRotateOrientation = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2 8C2 5.17157 2 3.75736 2.87868 2.87868C3.75736 2 5.17157 2 8 2H9C11.8284 2 13.2426 2 14.1213 2.87868C15 3.75736 15 5.17157 15 8V16C15 18.8284 15 20.2426 14.1213 21.1213C13.2426 22 11.8284 22 9 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16V8Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M17.5 10.0063C19.3597 10.0333 20.414 10.1712 21.1213 10.8785C22 11.7572 22 13.1714 22 15.9998C22 18.8283 22 20.2425 21.1213 21.1212C20.414 21.8285 19.3597 21.9664 17.5 21.9933"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M11 5H6"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M19 18V14"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M10 17.5C10 18.3284 9.32843 19 8.5 19C7.67157 19 7 18.3284 7 17.5C7 16.6716 7.67157 16 8.5 16C9.32843 16 10 16.6716 10 17.5Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M20.5 6.98598L22 8C22 4.98532 19.8377 2.48275 17 2"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgSmartphoneRotateOrientation;
