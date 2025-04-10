import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMultipleForwardRight = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M5.99986 10.1308C7.6132 8.97671 9.45448 8.57075 10.9998 8.57075V6.22616C10.9998 5.26817 10.9998 4.78917 11.2949 4.65662C11.5901 4.52407 11.9481 4.8423 12.6641 5.47875L16.6364 9.00968C18.205 10.404 18.9894 11.1012 18.9894 11.9993C18.9894 12.8975 18.205 13.5946 16.6364 14.989L12.6641 18.5199C11.9481 19.1563 11.5901 19.4746 11.2949 19.342C10.9998 19.2095 10.9998 18.7305 10.9998 17.7725V15.4279C7.39976 15.4279 3.49976 17.1422 1.99976 19.9993C1.99976 17.5676 2.37702 15.621 2.99986 14.0735"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.5386 4.5L20.7548 9.34362C21.5489 10.081 22.0001 11.1158 22.0001 12.1994C22.0001 13.3418 21.4989 14.4266 20.629 15.1671L15.5386 19.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgMultipleForwardRight;
