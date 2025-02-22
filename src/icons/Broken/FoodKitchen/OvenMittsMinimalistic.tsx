import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgOvenMittsMinimalistic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M4.0188 16.5368C2.67293 15.221 2 14.563 2 13.7454C2 13.2089 2.28972 12.7412 2.86916 12.1112C3.46036 11.4685 3.75595 11.1471 3.88968 10.8109C4.02341 10.4748 4.02705 10.0967 4.03433 9.34056L4.06648 5.99923C4.03217 3.81732 5.44093 2.02694 7.21305 2.0003C8.66759 1.97843 9.91482 3.15159 10.3341 4.77929M20.0783 13.3965C22.6406 10.8913 22.6406 6.82951 20.0783 4.32429C17.516 1.81908 13.3618 1.81908 10.7995 4.32429L10.3341 4.77929M10.3341 4.77929L9.37197 5.72001M17.4155 16L16.688 16.7113L13.2976 20.0262C11.9518 21.342 11.2788 22 10.4426 22C9.60638 22 8.93345 21.3421 7.58758 20.0262L6.51695 18.9794"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M10.7994 17.5836L6.51685 13.3965"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgOvenMittsMinimalistic;
