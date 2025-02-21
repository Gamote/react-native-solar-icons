import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBodyShapeMinimalistic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M20 2C20 2 18 6.68839 18 10.5714C18 11.8147 18.426 12.855 19 13.8912C19.6606 15.0836 20.5171 16.2704 21.1457 17.7543C21.6446 18.932 22 20.2968 22 22"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4 2C4 2 6 6.68839 6 10.5714C6 11.8147 5.57398 12.855 5.00001 13.8912C4.33945 15.0836 3.48291 16.2704 2.85426 17.7543C2.35537 18.932 2 20.2968 2 22"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6 13H11M18 13H15"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 22C12.5 20.5 15 17.5 21 17.5"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 22C11.5 20.5 9 17.5 3 17.5"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgBodyShapeMinimalistic;
