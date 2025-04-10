import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFigma = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.6}
      d="M11.6667 2H8.33333C6.49238 2 5 3.49238 5 5.33333C5 7.17428 6.49238 8.66667 8.33333 8.66667H11.6667V2Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.4}
      d="M11.6667 8.6665H8.33333C6.49238 8.6665 5 10.1589 5 11.9998C5 13.8408 6.49238 15.3332 8.33333 15.3332H11.6667V8.6665Z"
      fill={props.primaryColor}
    />
    <Path
      d="M18.3327 11.9998C18.3327 13.8408 16.8403 15.3332 14.9993 15.3332C13.1584 15.3332 11.666 13.8408 11.666 11.9998C11.666 10.1589 13.1584 8.6665 14.9993 8.6665C16.8403 8.6665 18.3327 10.1589 18.3327 11.9998Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.2}
      d="M8.33333 15.3335H11.6667V18.6668C11.6667 20.5078 10.1743 22.0002 8.33333 22.0002C6.49238 22.0002 5 20.5078 5 18.6668C5 16.8259 6.49238 15.3335 8.33333 15.3335Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.8}
      d="M11.666 2H14.9993C16.8403 2 18.3327 3.49238 18.3327 5.33333C18.3327 7.17428 16.8403 8.66667 14.9993 8.66667H11.666V2Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgFigma;
