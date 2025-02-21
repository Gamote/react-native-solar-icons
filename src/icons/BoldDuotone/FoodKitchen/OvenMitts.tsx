import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgOvenMitts = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M13.2978 20.0262L20.0785 13.3965C22.6407 10.8913 22.6407 6.82951 20.0785 4.32429C17.5162 1.81908 13.3619 1.81908 10.7996 4.32429L10.3343 4.77929C9.91498 3.15159 8.66775 1.97843 7.21321 2.0003C5.4411 2.02694 4.03233 3.81732 4.06664 5.99923L4.03449 9.34056C4.02721 10.0967 4.02358 10.4748 3.88984 10.8109L3.88574 10.8211L13.1931 20.1285L13.2978 20.0262Z"
      fill="black"
    />
    <Path
      opacity={0.5}
      d="M4.0188 16.537L7.58758 20.0263C8.93345 21.3422 9.60638 22.0002 10.4426 22.0002C11.2568 22.0002 11.9163 21.3763 13.1929 20.1286L3.88558 10.8213C3.74995 11.1538 3.45438 11.4752 2.86916 12.1114C2.28972 12.7414 2 13.2091 2 13.7456C2 14.5632 2.67293 15.2211 4.0188 16.537Z"
      fill="black"
    />
  </Svg>
);
export default SvgOvenMitts;
