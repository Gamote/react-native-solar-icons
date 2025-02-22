import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFigma = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M12 2H8.66671C6.82576 2 5.33337 3.49238 5.33337 5.33333C5.33337 7.17428 6.82576 8.66667 8.66671 8.66667H12V2Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M12 8.66669H8.66671C6.82576 8.66669 5.33337 10.1591 5.33337 12C5.33337 13.841 6.82576 15.3334 8.66671 15.3334H12V8.66669Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M18.6667 12C18.6667 13.841 17.1743 15.3334 15.3333 15.3334C13.4924 15.3334 12 13.841 12 12C12 10.1591 13.4924 8.66669 15.3333 8.66669C17.1743 8.66669 18.6667 10.1591 18.6667 12Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M8.66671 15.3333H12V18.6666C12 20.5076 10.5077 22 8.66671 22C6.82576 22 5.33337 20.5076 5.33337 18.6666C5.33337 16.8257 6.82576 15.3333 8.66671 15.3333Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M12 2H15.3333C17.1743 2 18.6667 3.49238 18.6667 5.33333C18.6667 7.17428 17.1743 8.66667 15.3333 8.66667H12V2Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgFigma;
